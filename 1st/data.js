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

export { studentsAry, sum, getStudentInfo, jsonString };
// 여기에서 정의된 함수, 객체 및 기능들을 다른 JavaScript 에서 사용할 수 있도록
// export 외부로 내보내겠다 계속 함수 정의하는 것 보다
// 미리 만들어 놓고 export/import 하면 더 편하다

const PI = 3.14;

function getStudentInfo() {
  return ["가나다라", "마바사", "아자차카", "파타하"];
}

let jsonString = `[{"id":1,"first_name":"Natalina","last_name":"Konertz","email":"nkonertz0@discovery.com","gender":"Female","salary":7413},
{"id":2,"first_name":"Hermann","last_name":"Goldin","email":"hgoldin1@desdev.cn","gender":"Male","salary":5423},
{"id":3,"first_name":"Amy","last_name":"Calendar","email":"acalendar2@last.fm","gender":"Female","salary":8903},
{"id":4,"first_name":"Dionis","last_name":"Karlmann","email":"dkarlmann3@home.pl","gender":"Female","salary":8411},
{"id":5,"first_name":"Lennard","last_name":"Hutson","email":"lhutson4@delicious.com","gender":"Male","salary":4182},
{"id":6,"first_name":"Hazlett","last_name":"Kohnert","email":"hkohnert5@washingtonpost.com","gender":"Male","salary":4028},
{"id":7,"first_name":"Gris","last_name":"Crumbleholme","email":"gcrumbleholme6@webs.com","gender":"Male","salary":5819},
{"id":8,"first_name":"Cazzie","last_name":"Baumber","email":"cbaumber7@amazon.com","gender":"Male","salary":3372},
{"id":9,"first_name":"Gregor","last_name":"Lewisham","email":"glewisham8@paypal.com","gender":"Male","salary":6393},
{"id":10,"first_name":"Euphemia","last_name":"Bloore","email":"ebloore9@cdc.gov","gender":"Female","salary":5966},
{"id":11,"first_name":"Kimbell","last_name":"Huntall","email":"khuntalla@ameblo.jp","gender":"Male","salary":3668},
{"id":12,"first_name":"Lanny","last_name":"Freire","email":"lfreireb@amazonaws.com","gender":"Female","salary":5039},
{"id":13,"first_name":"Robinett","last_name":"Errichi","email":"rerrichic@japanpost.jp","gender":"Female","salary":8498},
{"id":14,"first_name":"Cullin","last_name":"Borlease","email":"cborleased@printfriendly.com","gender":"Male","salary":4230},
{"id":15,"first_name":"Husain","last_name":"Estable","email":"hestablee@dot.gov","gender":"Male","salary":9321}]

`;
