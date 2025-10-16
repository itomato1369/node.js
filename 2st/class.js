// class.js
// 클래스는 대체로 대문자로 시작
// Object => class 객체를 만들기 위해
// 자동차 => (만들기 위한 도면, 계획)
let obj = {}; // {} 객체를 만든다 =  new Object();
obj.name = "car";

let student1 = {
  sno: 100,
  sname: "toyota",
  grade: 6,
  deptno: 104,
  showInfo: function () {
    return `번호:${this.sno}, 이름: ${this.sname}`;
  },
};
let student2 = {
  sno: 200,
  sname: "kia",
  grade: 5,
  deptno: 104,
  //   showInfo: function () {
  //     return `번호:${this.sno}, 이름: ${this.sname}`;
  //   },
};
console.log(student1.showInfo());
// console.log(student2.showInfo());

// 학생 => 정의()
class StudentIn {
  // 학번, 이름, 학년, 학과번호... : 속성을 가짐
  // 공부를 한다, 밥을 먹는다, 집에 간다... : 기능을 가지는 메소드
  constructor(sno, sname, grade, deptno) {
    // constructor 생성자
    this.sno = sno;
    this.sname = sname;
    this.grade = grade;
    this.deptno = deptno;
  }
  showInfo() {
    return `번호:${this.sno}, 이름: ${this.sname}`;
  }
}

// 인스턴스(객체) 생성
let std1 = new StudentIn(300, "hyundai", 5, 109);
let std2 = new StudentIn(400, "honda", 1, 105);
console.log(std1.showInfo());
console.log(std2.showInfo());
