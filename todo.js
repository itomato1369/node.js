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
