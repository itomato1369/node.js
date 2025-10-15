// module 기능
const studentsAry = [
  { sno: 100, sname: "컨버스", score: 100 },
  { sno: 200, sname: "퓨마", score: 57 },
  { sno: 300, sname: "나이키", score: 77 },
  { sno: 400, sname: "아디다스", score: 12 },
];

function sum(a, b) {
  return a + b;
}

export { studentsAry, sum, PI };
// 여기에서 정의된 함수, 객체 및 기능들을 다른 JavaScript 에서 사용할 수 있도록
// export 외부로 내보내겠다 계속 함수 정의하는 것 보다
// 미리 만들어 놓고 export/import 하면 더 편하다

const PI = 3.14;
