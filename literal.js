// literal.js
//
import { getStudentInfo } from "./data.js";

let myName = "기린";
// console.log("Hello, " + myName);
// console.log(`Bye,   ${myName}`);

let n1 = 10;
let n2 = 11;
// console.log(`n1 + n2 = ${n1 + n2}`);

// console.log(`${getStudentInfo().forEach((person) => console.log(person))}`);
// console.log(
//   `${getStudentInfo()
//     .map((person) => "친구이름=>" + person + "\n")
//     .join(" ")}`
//   // return이 생략됨
// );

// 펼침연산자(spread operatior)
let friends = ["애플", "삼성", "노키아"];
// console.log(...friends);

let newAry = [friends, getStudentInfo()];
// console.log(newAry);

// Object Destructuring
// 객체를 분해 펼친다
const person = {
  firstName: "구글",
  lastName: "마이크로",
  age: 20,
};

// let firstName = person.firstName;
let { firstName: fn, lastName: ln, age } = person;
console.log(fn, ln, age);

// Array Destructuring
// "가나다라", "마바사", "아자차카", "파타하"
let [ary1, ary2, ...ary3] = getStudentInfo();
console.log(ary1, ary2, ary3);

// default function parameter 매개값
function minus(n1 = 0, n2 = 0) {
  return n1 - n2;
}
console.log(minus(10));
