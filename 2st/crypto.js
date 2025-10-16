// crypto.js
const crypto = require("crypto");

let cryptoPw = crypto.createHash("sha256").update("Yale1890").digest("hex");
// console.log(cryptoPw);

// 1. 이미 암호화 되어있는 DataBase의 값을 가져옴
// 사용자가 입력한 값과 비교

let fixedSalt =
  "460576e56a81021599923da6110d305d76940fbcedd5e0d5e3003293edaba2ed333937c6f20ace9117983d1183691833739f64aef9b9cf4e811b3d90a2336915";
let dbPass =
  "460576e56a81021599923da6110d305d76940fbcedd5e0d5e3003293edaba2ed333937c6f20ace9117983d1183691833739f64aef9b9cf4e811b3d90a2336915";

async function getCryptoPassword(password) {
  // 1. salting 임의의 구문 => 동일한 비밀번호라도 라도 매번 다른 암호
  let salt = crypto.randomBytes(64).toString("hex");
  //   console.log(salt);
  //   console.log(fixedSalt);
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, fixedSalt, 1000000, 64, "sha512", (err, key) => {
      if (err) {
        console.error(err);
        return;
      }
      //  console.log(dbPass == key.toString("hex") ? "same" : "different");
      resolve(dbPass == key.toString("hex") ? "same" : "different");
    });
  });
}

getCryptoPassword("sample123")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
