// todo.js
// sample.txt 에 있는 단어(공백포함) 총 개수 =?

const fileSystem = require("fs"); // node.js 가 제공하는 기본 module
// 파일 시스템 module 불러오기

// 동기화 방식으로 읽기
fileSystem.readFile("sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log("data.split을 한 배열: ", data.split(" "));
  const countChar = data.split(" ").length; // data값의 .length 길이 = 글자 개수
  console.log(`"sample.text"의 띄워쓰기 기준 단어의 개수는 총${countChar} 개`);

  // 'e' 문자가 포함된 단어의 개수 =?
  let cnt = 0;
  for (let i = 0; i < data.split(" ").length; i++) {
    let c = data.split(" ")[i];
    // console.log(c); 전체
    if (c.includes("e")) {
      cnt++;
    }
  }
  console.log(`"sample.txt"안에 e의 개수는 총 ${cnt}개`);

  //   data.split(" ").forEach((item) => {
  //     console.log(item);
  //   });
});
