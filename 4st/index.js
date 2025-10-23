const mysql = require("./sql");
//★ excel 파일 읽을 수 있도록 함★
const xlsx = require("xlsx");

// excel 에서 mysql로
async function excel_to_db(filePath) {
  try {
    // workbook - sheet - row
    const workbook = xlsx.readFile(filePath);
    const firstSheetName = workbook.SheetNames[0];
    // 첫번째 시트명
    const firstSheet = workbook.Sheets[firstSheetName];
    // 첫번째 시트를 가지고옴
    const excelData = xlsx.utils.sheet_to_json(firstSheet);
    // javaScript의 객체(json배열)로 바꿔줌
    console.log(excelData);

    // json배열에서 mysql INSERT
    // 비동기처리로 인한 응답지연 방지
    for (const item of excelData) {
      await mysql.queryExecute(`INSERT INTO customers SET ?`, [item]);
    }
    console.log("excel 데이터를 DB로 삽입", result);
  } catch (error) {
    console.error("Error 발생", error);
  }
}
excel_to_db();

// mysql 에서 excel로
function db_to_excel() {
  // mysql에서 고객데이터 조회 -> excel 파일로 저장
  mysql
    .queryExecute(`SELECT id, name, email, phone, address FROM customers`, [])
    .then((result) => {
      console.log(result);
      // excel 파일 데이터
      // 워크북 생성 excel 파일을 만든다
      const workbook = xlsx.utils.book_new();
      // worksheet 생성
      const worksheet = xlsx.utils.json_to_sheet(result, {
        // 옵션 지정
        header: ["id", "name", "email", "phone", "address"],
      });
      xlsx.utils.book_append_sheet(workbook, worksheet, "customers");
      // workbook에 customers 라는 이름의 sheet를 추가
      xlsx.writeFile(workbook, "./files/customers.xlsx");
      // 파일 저장
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = { excel_to_db };
