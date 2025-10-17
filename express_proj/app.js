const express = require("express");
// express는 외부 모듈이라 터미널에cmd서 설치해야함
const fileSystem = require("fs");
const path = require("path");
// 파일 경로를 다루기 위해
const cookieSession = require("cookie-session");
// cookie-session는 외부 모듈이라 터미널에cmd서 설치해야함
const multer = require("multer");
// multer는 외부 모듈이라 터미널에cmd서 설치해야함
// ★파일 시스템 읽기★  require 혹은 import
// ★무조건 맨 위에서 실행★

// Route module 참조
const boardRouter = require("./route/board.js");
const customerRouter = require("./route/customers.js");
const productRouter = require("./route/products.js");

// server instance를 만들어야함
const app = express();
// app이라는 변수에 express()함수를 지정
// header에 타입을 지정/ body-parser 대신 express 내장함수 사용
app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
// parsing applicaiton/x-www-form-urlencoded
// post 방식의 기본값 url encoded
//
app.use(express.json()); // { user: 'green', score: '9' } json 값
//parsing application json
//
//
// 정적디렉토리 설정
app.use(express.static("public"));

// cookie-session 설정
app.use(
  cookieSession({
    name: "myCookieSession",
    keys: ["newjeans", "NJZ"], // 암호화키
    maxAge: 24 * 60 * 60 * 1000, // 24시간
  })
);

// 파일 업로드 설정 multer 한국어 처리 가능 하도록
const storage = multer.diskStorage({
  // 업로드된 파일이 저장될 위치 설정
  destination: function (req, file, cb) {
    // 저장할 폴더 이름 (예: 'uploads/')
    cb(null, "uploads/");
  },

  // 업로드된 파일의 이름 설정
  filename: function (req, file, cb) {
    // 1. 파일명(file.originalname)을 encodeURIComponent로 인코딩하여 한글 및 특수문자 문제 해결
    const safeOriginalname = encodeURIComponent(file.originalname);

    // 2. 현재 시간(Date.now())을 붙여 파일명의 중복을 방지하고, 안전하게 처리된 파일명을 사용
    cb(null, Date.now() + "-" + safeOriginalname);
  },
});
// upload가 저장정보 multer객체 생성
const upload = multer({ storage: storage });
//
// routing 정보: '/' end point -> page 정보 -> /list 글목록 정보
// get/post/put/delete 요청 방식 정보에 따라 정리
// Routing
// 라우팅 정보가 파일로 나눠서 작성
// customers.js, products.js
app.use("/customers", customerRouter);
// "/" , ... "/add"
app.use("/products", productRouter);

// 파일 업로드 테스트
app.post("/upload", upload.single("profile"), (req, res) => {
  // profile은 form에서 업로드하는 파일의 name 속성값
  console.log(req.file); // 업로드된 파일 정보
  res.send("파일 업로드 되었습니다 확인해주세요");
});

//
// cookie-session 테스트
// app.get("/login", (req, res) => {
//   if (!req.session.views) {
//     req.session.views = 1;
//   } else {
//     req.session.views++;
//   }

//   res.send(`현재 ${req.session.views}번째 방문입니다
//   <br><a href="/logout">로그아웃</a>`);
// });

// app.get("/logout", (req, res) => {
//   req.session = null;
//   res.redirect("/login");
//   // redirect 재지정 /login 페이지로 이동하겠다
// });
//
//
app.get("/", (req, res) => {
  // 매개값이 req(요청정보), res(서버의 응답 정보를 처리)
  fileSystem.readFile("./root.html", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("ERROR read file");
      return;
    }
    res.send(data);
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST request postic");
});

app.post("/:user/:score", (req, res) => {
  // localhost:3000/params의 값/params의 값
  console.log(req.params);
  res.send("POST request postic params");
});

app.get("/sales", (req, res) => {
  res.send("sales page");
});

app.get("/sales/list", (req, res) => {
  res.send("sales list page");
});

// ★5교시 문제★
app.get("/:sno/:sname/:score", (req, res) => {
  const { sno, sname, score } = req.params;

  // 문자열로 들어온 'score' 값을 숫자로 변환
  const changeScore = parseInt(score);

  // 합격, 불합격 여부
  let passResult =
    changeScore >= 80
      ? `합격(점수: ${changeScore}점)`
      : `불합격(점수: ${changeScore}점)`;

  res.send(`학번: ${sno}
    이름: ${sname}
    합격여부: ${passResult}`);
});

// ★8교시 문제★
// Routing http: //localhost:3000/login
// id, pass 입력
// ${id}님 환영합니다.
// id, pass 가 맞지 않을 때
// "id, pass"를 확인하세요
app.get("/login", (req, res) => {
  //  user_log.html 경로로 접속하도록 리다이렉트
  res.redirect("/user_log.html");
});
app.post("/login", (req, res) => {
  // HTML 폼에서 전송된 ID와 Password를 req.body 객체에서 가져옵니다.
  const inputId = req.body.id;
  const inputPw = req.body.pw;

  // 1. user_info.txt 파일 읽기
  const userDataPath = path.join("./user_info.txt");
  const userData = fileSystem.readFile(userDataPath, "utf-8", (err, data) => {
    // 콜백 함수 실행
    if (err) {
      console.log("Error", err);
      return;
    }
    console.log(data);
  });

  // 2. 파일 내용을 줄 단위로 분리, 각 줄을 쉼표로 나누어 처리 공백제거
  const users = userData
    .trim()
    .split("\n")
    .filter((line) => line.trim().length > 0) // 빈 줄 제거
    .map((line) => line.split(",").map((item) => item.trim()));

  // 3. 입력된 id와 pass 가 user_info.txt 배열에 있는지 확인
  let author = false;

  for (const [id, pw] of users) {
    if (id === inputId && pw === inputPw) {
      author = true;
      break;
    }
  }

  // 4. 입력된 결과에 따라 응답(Response)
  if (author) {
    // id pw 가 일치하면 환영합니다
    res.send(`<h1>${inputId}님 환영합니다</h1>`);
  } else {
    res.send(`<h1>id와 pw를 확인하세요</h1>
        <p><a href="/login">다시 로그인<p>`);
  }
});

app.get("/logout", (req, res) => {
  req.session = null;
  res.redirect("/login");
});

// 숙제: 여러파일 업로드 처리.

//
// ★서버를 사용하는 포트, callback 함수★
app.listen(3000, () => {
  console.log("Server is running on port 3000 DAYDATE: FRIDAY");
});
