// moduleExe.js

const { PI, sum } = require("./module.js"); // 만든 거
const fileSystem = require("fs"); // node.js 가 기본으로 제공하는 module

// 비동기 처리 => callback 함수
// fileSystem.writeFile("sample.txt", "Goodbye, World", (err) => {
//   if (err) {
//     console.log(new Error(err));
//   }
//   console.log("well done");
// });

// 동기 처리 callback 함수가 없음
// fileSystem.writeFileSync("sample2.txt", "비동기처리 완료", "utf-8");
// console.log("쓰기 완료!");

// 비동기 처리
fileSystem.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

// 동기처리
let data = fileSystem.readFileSync("sample2.txt", "utf-8");
console.log(data);

//
console.log(PI);
console.log(sum(1, 2));
