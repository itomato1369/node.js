const mysql = require("mysql2/promise");

// ★★ mysql 연결 세팅 ★★
const dbConfig = {
  host: "localhost",
  user: "dev01",
  password: "dev01",
  database: "dev",
  port: 3306, // mysql 기본 포트 3306
  connectionLimit: 10, // pull 방식
};
//   connection pool 생성
const pool = mysql.createPool(dbConfig);

// 쿼리 함수
function queryExecute(sql, params) {
  let connection;
  return new Promise(async (resolve, reject) => {
    try {
      let conn = await pool.getConnection();
      connection = conn;
      const [rows, fields] = await connection.query(sql, params);
      resolve(rows);
    } catch (err) {
      reject(err);
    } finally {
      if (connection) connection.release();
    }
  });
}

module.exports = { queryExecute };
