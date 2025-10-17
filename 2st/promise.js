// promise.js
// pending / fulfilled(성공) / rejected(예외가 발생, 에러),
// promise가 가지는 method 의 객체 then()/ catch()
// 함수를 매개값으로 받고 성공/ 실패 함수 둘다 넣어야함
// 이 함수의 처리가 끝나면 반드시 값을 반환해주겠다 promise
const promise = new Promise(function (resolve, reject) {
  // 정상완료 = 첫번째 매개값으로 받은 함수호출

  // 거부 오류 = 두번째 매개값으로 받은 함수호출
  try {
    setTimeout(function () {
      resolve({ retCode: "Success", retVal: ["abc", "def", "ghi"] });
    }, 1000);
    // 1초뒤에 이 함수를 실행 하겠습니다
  } catch (err) {
    reject(new Error("Error !"));
  }

  //   setTimeout(function () {
  //     reject(new Error("Error"));
  //   }, 1000);
});

promise
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.error(err);
  });

// fetch(" ")
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
