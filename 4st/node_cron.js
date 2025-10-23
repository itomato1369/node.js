const cron = require("node-cron");
const winston = require("winston");
// 로그관리 모듈
const mysql = require("./sql");

const { queryExecute } = require("./sql");

//
const logger = winston.createLogger({
  level: "info", // error>warn>info>http>verbose>debug>silly
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (info) => `${info.timestamp}[${info.level}]:${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "log/info.log" }),
  ],
});

// DB 쿼리
async function customerList() {
  try {
    let result = await mysql.queryExecute(
      `SELECT count(*) AS cnt FROM customers`,
      []
    );
    logger.info(`customers 테이블의 현재 건수${result[0].cnt}`);
  } catch (err) {
    logger.error(`ERROR: ${err}`);
  }
}
customerList();

cron.schedule("*/3 * * * * *", () => {
  customerList();
});

// cron.schedule("*/3 * * * * *", () => {
//   logger.error(`ERROR`);
//   logger.warn(`warning! warning!`);
//   logger.info(`Information Tech`);
//   logger.http(`DOCTYPE !`);
//   logger.verbose(`verbose`);
//   logger.debug(`bugbug`);
//   logger.silly(`silly chump fool idiot`);
// });

// second- min- hour- day of month(날짜)- month- day of week
// 매 1초마다 실행
// 매 분마다 customers 데이터를 출력
// 그리고 건수도 출력
//
// async 과 await try catch를 사용하는 이유
// 흐름 제어와 에러 처리를 동기 코드만큼 직관적으로 만들기 위함
//
// cron.schedule("0 * * * * *", async () => {
//   // mysql 의 customer TABLE을 조회
//   console.log(`[${new Date().toLocaleDateString()}] 테이블조회 시작`);
//   try {
//     const customers = await queryExecute(`SELECT * FROM customers`, []);
//     const count = customers.length;

//     console.log(customers);
//     console.log(`[${new Date().toLocaleDateString()}] 조회 완료`);
//     console.log(`전체 ${count}개 입니다`);
//   } catch (error) {
//     console.error("오류:", error);
//   }
// });
