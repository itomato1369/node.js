// Array.prototype.sort(); 배열 객체에서만 사용가능 가나다,abc순 정렬

// 'abc'.sort(); 문자열에 함수 안됨
// 문자열을 -> 배열로 .split()
// "abc".split("").sort();
// // ['a','b','c'].sort();

// let fruits = ["banana", "apple", "mango", "kiwi"];
// console.log(fruits.sort());

// let points = [2, 14, 1, 10, 55, 99];
// points.sort(function (a, b) {
//   // 오름차순: - 값을 반환
//   // 내림차순: + 값을 반환
//   console.log(a, b);
//   //   return a - b;
//   if (a < b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(points);

// []배열
const students = [];
students.push({ sno: 100, sname: "김동우우", score: 78 });
students.push({ sno: 200, sname: "우우동김", score: 55 });
students.push({ sno: 300, sname: "동김우동", score: 81 });

students.sort(function (a, b) {
  if (a.score < b.score) {
    return -1;
  } else {
    return 1;
  }
});
console.log(students);

// filter(function(요소element, 인덱스index, 배열array){})
// => 특정 조건을 만족하는 배열의 요소만 찾아서 새로운 배열로 반환

// let result = students.filter(function (elem, idx, ary) {
//   if (elem.score < 80) {
//     return true;
//   }
// });
// console.log(result);

let result = students.filter((elem) => elem.score < 80);
console.log(result);

// map(function)
// => 매핑 (A -> A') 학생번호 + 이름 + 점수 => 학생번호 + 이름 + 통과
// result = students.map(function (elem) {
//   //
//   const obj = {};
//   obj.no = elem.sno;
//   obj.name = elem.sname;
//   obj.pass = elem.score >= 60 ? "PASS" : "FAIL";
//   return obj;
// });
// console.log(result);

result = students.map(function ({ sno, sname, score }) {
  // { sno, sname, score } = elem > object destructuring
  const obj = {};
  obj.no = sno;
  obj.name = sname;
  obj.pass = score >= 60 ? "PASS" : "FAIL";
  return obj;
});
console.log(result);
