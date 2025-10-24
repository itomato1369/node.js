const express = require("express");
const cors = require("cors");
// cors moduel
const mysql = require("./sql/index.js");
const nodemailer = require("nodemailer");
//
const crypto = require("crypto");
// ★ express app 서버에 대한 세팅 ★
const app = express();
const port = 3000;

// 메일링 transporter
const transporter = nodemailer.createTransport({
  host: "smtp.daum.net",
  port: 465,
  secure: true,
  auth: {
    user: "itomato813",
    pass: "sebocxhqvkqqclea",
  },
});

// 미들웨어 ★middleware★
app.use(express.json()); // json 형식
app.use(express.urlencoded({ extended: true }));
// 정적 디렉토리 설정
app.use(express.static("public"));
app.use(cors());
// cors 정책을 무시하겠습니다

app.get("/", (req, res) => {
  res.send("I love MONDAY");
});

// // nodemailer 메일링 서비스
app.get("/sendmail", (req, res) => {
  const data = {
    from: "itomato813@daum.net",
    to: "itomato813@daum.net",
    subject: "Test e-mail from Node.js",
    text: "TEST 2025/10/20",
  };
  transporter.sendMail(data, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    } else {
      console.log(info);
      res.send("Email sent successfully");
    }
  });
});

// 회원가입 폼 데이터를 mysql로
app.post("/signup", (req, res) => {
  // 폼데이터 받기
  const formData = req.body;
  console.log(req.body);

  if (!formData.password || !formData.userid) {
    return res.status(400).send("이름 비밀번호를 입력하세요");
  }

  // salt 생성
  try {
    const salt = randomBytes(16).toString("hex");
    // 비밀번호 해싱(암호화)
    const hashedPassword = pbkdf2(
      formData.password,
      salt,
      HASH_ITERATIONS,
      HASH_KEYLEN,
      HASH_ALGORITHM
    );

    // DB 저장 데이터 객체
    const originalUserId = formData.userid;
    delete formData.password; // 원본 비밀번호는 저장하지 않는다

    const dataToInsert = {
      formData,
      password_has: hashedPassword.toString("hex"),
      password_salt: salt,
    };

    // DB INSERT 쿼리 실행
    const insertSql = `INSERT INTO customers SET ?`;
    let result = mysql.queryExecute(insertSql, dataToInsert);

    console.log("회원가입 성공", result);
    res.send(`${originalUserId}님 환영합니다`);
  } catch (err) {
    console.error("Error", err);
    res.status(500).send(`오류 ${err.message}`);
  }
});

//
// mysql 의 customer TABLE을 조회
app.get("/customers", async (req, res) => {
  try {
    const param = req.body;
    let result = await mysql.queryExecute(`SELECT * FROM customers`, []);
    res.send(result);
  } catch (error) {
    res.status(500).send({ Error: error.message });
  }
});

app.get("/customers/:id", async (req, res) => {
  const id = req.params.id;
  let result = await mysql.queryExecute(
    `SELECT * FROM customers WHERE id = ?`,
    id
  );
  res.send(result);
});

// 고객 추가
app.post("/customer", async (req, res) => {
  try {
    const param = req.body;
    // insert 쿼리 실행
    console.log(param);

    let result = await mysql.queryExecute(`INSERT INTO customers SET ?`, param);
    res.send(result);
  } catch (error) {
    console.error("!!!! 서버 DB 쿼리 실패 상세 오류 !!!!", error);
    res.status(500).send({ Error: "Server failed to insert data." });
  }
});

app.post("/customer/:id", async (req, res) => {
  const id = req.params.id;
  let result = await mysql.queryExecute(
    `DELETE FROM customers 
    WHERE id = ?`,
    [id]
  );
  res.send(result);
});

// app.put("/customer", async (req, res) => {
//   const param = req.body.param; // [{ name: '?', email: '?', phone: '?', address: '?'}, 5]
//   //   console.log(param);
//   try {
//     let result = await mysql.queryExecute(
//       `UPDATE customers SET ?
//     WHERE id = ?`,
//       param
//     );
//     res.send(result);
//   } catch (err) {
//     console.log("Error", err);
//   }
// });

app.listen(port, () => {
  console.log(`http://localhost:${port} FRIDAY server`);
});
