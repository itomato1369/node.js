// todo.js
import { jsonString } from "./data.js";
let jsonObject = JSON.parse(jsonString); // JavaScript로 파싱
// console.table(jsonObject);

// // reduce 출력: Female => id, fullname, email, salary => 배열 이름 resultAry
// let resultAry = jsonObject.reduce(function (acc, elem) {
//   const obj = [];
//   obj.id = elem.id;
//   obj.name = `${elem.first_name} ${elem.last_name}`;
//   obj.email = elem.email;
//   obj.salary = elem.salary;

//   if (elem.gender == "Female") {
//     acc.push(obj);
//   }
//   return acc;
// }, []);
// console.table(resultAry);

// jsonObject gender 별 인원
// Male: []
// Female: []
// Genderqueer: []
// Agender: []
// resultAry = jsonObject.reduce(function (acc, elem) {
//   const obj = [];
//   const obj1 = [];

//   obj.male = `${elem.first_name} ${elem.last_name}`;
//   obj1.female = `${elem.first_name} ${elem.last_name}`;

//   if (elem.gender === "Male") {
//     acc.push(obj);
//   }

//   if (elem.gender === "Female") {
//     acc.push(obj1);
//   }
//   return acc;
// }, []);
// console.table(resultAry);

//reduce 출력: Female => id, fullname, email, salary => 배열 이름 resultAry
let resultAry = jsonObject.reduce(
  (acc, { id, first_name, last_name, email, gender, salary }) => {
    if (gender === "Female") {
      acc.push({ id, fullName: first_name + " " + last_name, email, salary });
    }
    return acc;
  },
  []
);
// console.table(resultAry);

resultAry = jsonObject.reduce((acc, elem) => {
  const key = elem["gender"]; // 'Male', 'Female'  객체의 속성
  if (!acc[key]) {
    acc[key] = []; // {Male: [], Female: []}
  }
  acc[key].push(elem.first_name);
  return acc;
}, {});
// console.table(resultAry);

let x = 5;
let y = 6;
let z = x + y;
// console.log(z);

const dateFormat = "YYYY.MM.DD";
// console.log(dateFormat);

function hello() {
  return "HELLO";
}
// console.log(hello());

const hello2 = () => {
  return "morning";
};
// console.log(hello2());

const hello4 = () => "samsung";
// console.log(hello4());

let fruits = ["s", "d", "g", "j"];
fruits.sort(); // 기본 오름차순
// console.log(fruits);

let fruits1 = ["a", "s", "d", "g", "j"];
fruits1.sort();
fruits1.reverse();
// console.log(fruits1);

let points = [40, 10, 2, 142, 58];
// points.sort(); // 숫자는 주의 해야함. 1의자리 먼저 보고 그다음 10의 자리를 봄
points.sort(function (a, b) {
  return a - b;
});
// console.log(points);
// 오름차순
let points1 = [40, 10, 2, 142, 58];
points1.sort(function (a, b) {
  return b - a;
});
// console.log(points1);
// 내림차순

let persons = [
  { name1: "유재석", point: 13, city: "서울" },
  { name1: "유튜브", point: 52, city: "창원" },
  { name1: "소녀", point: 973, city: "부산" },
  { name1: "이달의", point: 55, city: "대전" },
  { name1: "츄", point: 61, city: "경기" },
];
persons.sort(function (a, b) {
  return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
});
// console.log(persons);

const words = ["spray", "limit", "elite", "ex", "rp"];
const result1 = words.filter(function (word) {
  return word.length > 3;
});
console.log(result1);
