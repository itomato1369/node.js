console.log("node start"); // 문자열
let times = 3;
const PI = 3.14; // 상수는 고정된 값

// 객체할당.  {};객체
const obj = {};
obj.age = 10; // 속성추가 변경가능.
// obj = { age: 10 }; // 에러가 남 객체 안에 값을 담을 수는 있다.
console.log(obj);

for (let i = 1; i < times; i++) {
  console.log(i);
}

{
  let times = 4;
  console.log(times);
}
console.log(times);

// 1.함수정의
function sum(n1 = 0, n2 = 0) {
  return n1 + n2;
}

// Syntax 구문 SyntaxError 구문에러  1,2 둘 중 하나만
// 2. 함수표현   간단하게 화살표 함수로 정리 가능
// 함수 안에 return만 있으면 ({}) 생략가능

const sum = (n1 = 0, n2 = 0) => n1 + n2;
console.log(`sum(1, 2)의 결과는 ${sum(1, 2)}`);
// ${} 안에는 간단한 식도 들어감
