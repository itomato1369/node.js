const express = require("express");
const mysql = require("./sql");
const xlsx = require("xlsx");
// ★excel 모듈 설치★
const multer = require("multer");
const path = require("path");
// 파일 시스템 접근을 위한 모듈
const fileSystem = require("fs");
//
const cron = require("node-cron");
const { queryExecute } = require("./sql");
const { mailSendFunc } = require("./sendmail.js");

// ★★
const app = express();
const PORT = 3000;
// ★정적 디렉토리 설정★
app.use(express.static("public"));
//

let scheduledJob = null;

// ★body-parser 대신 express 내장함수 사용★
app.use(express.urlencoded({ extended: false }));
app.use(
  express.json({
    limit: "50mb",
  })
);
// filesDir 변수 정의 및 폴더 생성
const filesDir = path.join(__dirname, "files");
if (!fileSystem.existsSync(filesDir)) {
  fileSystem.mkdirSync(filesDir);
}

// ★index.js 에 있는 excel_to_db()함수를 가져옴★
async function excel_to_db(filePath) {}
//
// ★routing 정보 생성★
app.get("/", (req, res) => {
  res.send("This is 10/21 4st node npm satrt");
});

// customer TABLE 조회 -> excel -> email로 전송 시 첨부파일
// "/customerInfo" GET
// app.get("/customerInfo", async (req, res) => {
//   let filePath = "./files/customers.xlsx";

//   try {
//     // customer TABLE을 조회
//     let result = await mysql.queryExecute(`SELECT * FROM customers`, []);
//     res.send(result);

//     //excel 파일 생성
//     const workbook = xlsx.utils.book_new();
//     const worksheet = xlsx.utils.json_to_sheet(result);
//     xlsx.utils.book_append_sheet(workbook, worksheet, "customers");

//     // email 전송
//     await mailSendFunc(filePath, res);

//     res.send("고객 정보 조회, excel 생성 및 이메일 전송 완료");
//   } catch (error) {
//     console.error("전송 실패", error);
//     res.status(500).send("500 Internal Server Error");
//   }
// });

app.post("/upload/:productId/:type/:fileName", (req, res) => {
  const dir = `uploads/${req.params.productId}/${req.params.type}`;

  if (!fileSystem.existsSync(dir)) {
    fileSystem.mkdirSync(dir, { recursive: true });
  }
  const filePath = `${dir}/${req.params.fileName}`;
  const base64Data = req.body.imageBase64.slice(
    req.body.imageBase64.indexOf(";base64") + 8
  );
  fileSystem.writeFile(`${filePath}`, base64Data, "base64", (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("500 Internal Server Error");
    }
    console.log("파일 저장 성공");
  });
  res.send("OK OKAY ");
});

// ★파일 업로드 모듈 multer 폴더경로: uploads 하위에 업로드(한글이 깨지지않도록)
// 시간-원래파일명
// excel -> DB INSERT 함수의 기능활용
// 파일 업로드 설정
const storage = multer.diskStorage({
  // 업로드된 파일이 저장될 위치
  // cb =  callback 함수
  // multer의 destionation 함수
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads/"));
    // cb(null, ...) 경로를 설정하는 과정에서
    // 에러가 발생하지 않았다 에러없이 파일을 ~경로에 지정
  },
  // multer의 filename 함수
  filename: function (req, file, cb) {
    const safeOriginalname = encodeURIComponent(file.originalname);
    // 한글 인코딩

    cb(null, Date.now() + "-" + safeOriginalname);
    // 파일 이름이 중복되지 않도록 파일명 설정
  },
});
// multer 미들웨어에 연결
// upload.single 의 파일업로드 수행하는 객체 함수 실행을 위해
const upload = multer({ storage: storage });

app.post("/upload/excels", upload.single("excelFile"), async (req, res) => {
  // 멀티파트 폼데이터 처리 -> DB저장
  // 업로드된 파일 정보확인
  if (!req.file) {
    return res.status(400).send("파일 전송 오류");
  }
  const filePath = req.file.path;
  // multer에 의해 저장된 파일 경로
  try {
    // 수정된 함수를 호출하며 파일 경로 전달
    await excel_to_db(filePath);

    // 성공 응답
    res.send(`성공적으로 (${req.file.originalname})는 DB로 저장되었습니다`);
  } catch (error) {
    console.error("DB에 저장하지 못함", error);
    res.status(500).send("파일 처리중 서버에러");
  }
});

// 고객정보 -> email로 발송
// cron/ start GET 요청 10분단위로 고객의 정보를 가져옴
// id name email phone address
// cron/ stop GET 요청 종료
const customerReportJob = async () => {
  let tempFilePath = "";
  console.log("고객 보고서 작업 시작");
  try {
    // DB 조회
    const result = await queryExecute(
      `SELECT id, name, email, phone, address
      FROM customers`,
      []
    );
    // excel 파일 생성 및 저장
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(result);
    xlsx.utils.book_append_sheet(workbook, worksheet, "customers");

    const fileName = `customer_report_${Date.now()}.xlsx`;
    tempFilePath = path.join(filesDir, fileName);
    xlsx.writeFile(workbook, tempFilePath);

    // 이메일 전송
    await mailSendFunc(tempFilePath);
    console.log(`[email] 전송 완료`);
  } catch (err) {
    console.error(`Error:${err.message}`);
  }
};
app.get("/cron/start", (req, res) => {
  if (scheduledJob) {
    return res.status(200).send("10분 간격으로 실행");
  }
  scheduledJob = cron.schedule("*/5 * * * * *", customerReportJob, {
    scheduled: true,
    timezone: "Asia/Seoul",
  });
  console.log("매 10분간격으로 보고서를 이메일로 발송");
  res.send("10분뒤 다시 보냄");
});

app.get("/cron/stop", (req, res) => {
  if (scheduledJob) {
    scheduledJob.stop();
    scheduledJob = null;
    console.log("중지");
    return res.send("정상 중지");
  }
  res.status(200).send("전체 스케쥴 중지");
});

// ★server start★
app.listen(PORT, () => {
  console.log(`TUESDAY server is running on ${PORT}`);
});
