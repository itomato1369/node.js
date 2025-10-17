// console_class.js
const { Console } = require("console");
// 클래스는 대체로 대문자로 시작
// node.js 가 제공하는 console 관련 기능들을 가져온다
// const 가져온 기능 묶음안에서 Console 이라는 클래스만 가져온다

const fileSystem = require("fs");

// write 쓰기 전용 stream 데이터의 흐름
const output = fileSystem.createWriteStream("./stdout.log", { flags: "a" });
// 일반적인 로그 파일 생성
// { flags: "a" } stdout.log 파일에 누적 그 뒤에 계속 추가

const errOutput = fileSystem.createWriteStream("./stderr.log", { flags: "a" });
// 에러 로그 파일 생성

const logger = new Console({ stdout: output, stderr: errOutput });

// log(): 로그 출력 , err(): 에러 로그 출력
logger.log("amugeona\n");
logger.error("Error your computer\n");

// const { Console } = require("console");
// const fileSystem = require("fs");
// const output = fileSystem.createWriteStream("./stdout.log", { flags: "a" });
// const errOutput = fileSystem.createWriteStream("./stderr.log", { flags: "a" });

// const logger = new Console({ stdout: output, stderr: errOutput });
// logger.log("nightnight\n");
// logger.error("ErroreRror\n");
