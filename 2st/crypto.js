// crypto.js
const crypto = require("crypto");

let cryptoPw = crypto.createHash("sha256").update("Yale1890").digest("hex");
// console.log(cryptoPw);

// 1. 이미 암호화 되어있는 DataBase의 값을 가져옴
// 사용자가 입력한 값과 비교

let fixedSalt =
  "e145b843363d3139c996d7b91df3187e4e425e68e9e58b6d1ad92d1e1ad13444ca79000fa70b7b213e749a3036f3b12a0d9deffdf1513944955a5021ba92c8c9";
let dbPass =
  "e56ef96852cca1f965ae96f98e473fc7e23b4cd2c4f2ac1633683e4c04ca9c12b37555710b07437c215d7548540ccd216d21dc4541ee13c17d8c6caf8cb98190";

async function getCryptoPassword(password) {
  // 1. salting 임의의 구문 => 동일한 비밀번호라도 라도 매번 다른 암호
  let salt = crypto.randomBytes(64).toString("hex");
  // console.log(salt);
  console.log(fixedSalt);
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, fixedSalt, 1000000, 64, "sha512", (err, key) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(key.toString("hex"));
      // console.log(dbPass == key.toString("hex") ? "same" : "different");
      resolve(dbPass == key.toString("hex") ? "same" : "different");
    });
  });
}

getCryptoPassword("sa123")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = { getCryptoPassword };
