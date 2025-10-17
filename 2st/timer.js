// timer.js
// setTimeout 한 번만 실행
// setInterval 계속 실행

const fileSystem = require("fs");
const process = require("process");
const os = require("os");

// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
// console.log(os.type());

// console.log(process.env.USERNAME);
// process.exit(); // 강제로 종료 이 밑으로 다 실행 안 시키겠다

// setTimeout(() => {
//   //   console.log("한 번 실행");
// }, 1000);

fileSystem.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    return;
  }
  let count = 0;

  let max = data.length;

  let loop = setInterval(() => {
    console.clear();
    console.log(data.substring(0, count++));
    if (count == max) {
      clearInterval(loop);
    }
  }, 10);
});

//   setTimeout(() => {
//     clearInterval(loop); // 실행하는 loop를 종료
//   }, 100000);

// let loop = setInterval(() => {
//       console.log("무한성 입성");
//     }, 100);

// setTimeout(() => {
//   clearInterval(loop); // 실행하는 loop를 종료
// }, 10000);
