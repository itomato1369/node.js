// Array.prototype.reduce();
// reduce(function() { ... })
// 기능만 잘 만들면 다양하게 사용가능

import { studentsAry, PI } from "./data.js";
// ./현재 경로에서 data.js에서 studentsAry를 가져와서 쓰겠습니다
// require 도 import와 같다

// let result = [1, 2, 3, 4, 5].reduce(function (acc, elem, idx, ary) {
//   // acc 누산값
//   console.log(`acc:${acc}, elem:${elem}, idx:${idx}, ary:${ary}`);
//   return acc + elem;
// }, 0);
// console.log(`결과: ${result}`);

// let result = [1, 2, 3, 4, 5].reduce(function (acc, elem, idx, ary) {
//   // acc 누산값
//   console.log(`acc:${acc}, elem:${elem}, idx:${idx}, ary:${ary}`);
//   if (idx % 2 == 0) {
//     acc.push(elem);
//   }
//   return acc;
// }, []);
// console.log(`결과: ${result}`);

// 홀수는 1,3,5... 째위치값
// const evenAry = function (acc, elem, idx, ary) {
//   // accumulator 누산값
//   // console.log(`acc:${acc}, elem:${elem}, idx:${idx}, ary:${ary}`);
//   if (idx % 2 == 1) {
//     acc.push(elem); // [1, 3, 5]
//   }
//   return acc;
// };

// // 누적합
// const sumAry = (acc, elem) => {
//   return acc + elem;
// };

// let result = [1, 2, 3, 4, 5].reduce(evenAry, []);
// console.log(`결과: ${result}`);
// // 새로운 배열

// let result1 = [1, 2, 3, 4, 5].reduce(sumAry, 0);
// console.log(`총합: ${result1}`);

// let result = [23, 11, 53, 29, 8].reduce(function (acc, elem, idx) {
//   // acc, elem 큰 값을 반환
//   console.log(idx, acc, elem);
//   return acc > elem ? acc : elem;
// }, 0);
// // 초기값이 있어야함. 없으면 값이 하나 줄어든다
// console.log(`최대값: ${result}`);

// let result = [23, 11, 53, 29, 8].reduce(function (acc, elem, idx) {
//   // acc, elem 큰 값을 반환
//   console.log(idx, acc, elem);
//   return acc < elem ? acc : elem;
// }, 53);
// // 초기값이 있어야함. 없으면 값이 하나 줄어든다
// console.log(`최소값: ${result}`);

// 60점 이상인 사람만 배열에 저장
// let result = studentsAry.reduce(function (acc, elem) {
//   // console.log(acc, elem);
//   if (elem.score >= 60) {
//     acc.push(elem);
//   }
//   return acc;
// }, []);
// // 배열이니까 초기값은 []
// console.table(result);

// 배열 속 중복된 값 제거1
// const numAry = [23, 12, 55, 98, 23, 12];
// let result = numAry.reduce(function (acc, elem) {
//   console.log(acc.indexOf(elem));
//   if (acc.indexOf(elem) === -1) {
//     acc.push(elem);
//   }
//   return acc;
// }, []);
// console.log(result);

// 배열 속 중복된 값 제거2
// const numAry = [23, 12, 55, 98, 23, 12];
// let result = numAry.reduce(function (acc, elem) {
//   if (!acc.includes(elem)) {
//     acc.push(elem);
//   }
//   return acc;
// }, []);
// console.log(result);

// 배열 속 중복된 값 제거3
const numAry = [23, 12, 55, 98, 23, 12];
let result = numAry.reduce(function (acc, elem) {
  let exists = acc.reduce(function (acc2, elem2) {
    return acc2 || elem2 == elem;
  }, false);

  if (!exists) {
    acc.push(elem);
  }
  return acc;
}, []);
console.log(result);
