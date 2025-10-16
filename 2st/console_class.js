// console_class.js
const { Console } = require("console");
// 클래스는 대체로 대문자로 시작

const fileSystem = require("fs");

// write 쓰기 전용 stream 데이터의 흐름
const output = fileSystem.createWriteStream("./stdout.log", { flags: "a" });
// 일반적인 로그 파일 생성
// { flags: "a" } stdout.log 파일에 누적

const errOutput = fileSystem.createWriteStream("./stderr.log", { flags: "a" });
// 에러 로그 파일 생성

const logger = new Console({ stdout: output, stderr: errOutput });

// log(): 로그 출력 , err(): 에러 로그 출력
logger.log("amugeona\n");
logger.error("Error your computer\n");
