// settimeout.js 비동기방식  쭉 진행하고 마지막에 코드 실행
// 10 + / 2 * / 2 + / 5 =

// promise를 async/await,  try 를 활용해서 더욱 읽기 쉽도록

let result = 10;

// Promise를 반환해주는 함수
function delayFunc(delay, operations) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      operations();
      resolve(result);
    }, delay);
  });
}

// delayFunc() 함수에 delay에는 어느정도 기다릴지 시간 값 넣고
// operations 에는 기능을 넣어서 Promise를 return하겠다 delayFunc함수 안의
// Promise() 함수는  resolve 성공했을 때, operations(), result값을 return한다

// 동기적으로 처리하겠다
async function runPromise() {
  try {
    await delayFunc(500, () => {
      // await delayFunc 코드가 전부 진행될 때 까지 기다리겠다
      result += 2;
      // result 에 2를 더한다
    });
    console.log(result); // 첫 번째 작업 console.log

    await delayFunc(1000, () => {
      // delayFunc 코드가 전부 진행될 때 까지 기다리겠다
      result *= 2;
    });
    console.log(result); // 두 번째 작업 console.log

    await delayFunc(800, () => {
      // delayFunc 코드가 전부 진행될 때 까지 기다리겠다
      result += 5;
    });
    console.log(result); // 세 번째 작업 console.log
  } catch (err) {
    console.log(new Error("Error Warning")); // 코드에 오류가 발생하였을 시 catch
  }
} // end of runPromise
runPromise(); // runPromise 함수를 실행
//
//
// let result = 10;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       result += 2;
//       resolve(result);
//     }, 500); // +2
//   });
// promise //
//   .then((resp) => {
//     console.log(resp);
//     return new Promise((resolve, reject) => {
//       // promise 객체를 return반환 해야 다음으로 이어갈 수 있다
//       setTimeout(function () {
//         result *= 2;
//         resolve(result);
//       }, 1000); // *2
//     });
//   })
//   .then((resp) => {
//     console.log(resp);
//     return new Promise((resolve, reject) => {
//       setTimeout(function () {
//         result += 5;
//         resolve(result);
//       }, 1000); // +5
//     });
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//
//
//
// setTimeout(function () {
//   result += 2;
// }, 500); // +2

// setTimeout(function () {
//   result *= 2;
// }, 1000); // *2

// setTimeout(function () {
//   result += 5;
// }, 800); // +5

// console.log(result);
//
// 비동기방식의 코드를 순차적인 동기방식으로
// setTimeout(function () {
//   result += 2;

//   setTimeout(function () {
//     result *= 2;

//     setTimeout(function () {
//       result += 5;

//       //   console.log(result);
//     }, 800); // +5
//   }, 1000); // *2
// }, 500); // +2
