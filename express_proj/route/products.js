const express = require("express");
const router = express.Router();
// express 가 가지고 있는 Router 클래스

//  "/" : 상품정보, "/add": 상품등록
router.get("/", (req, res) => {
  res.send("Welcome to Products HOME page");
});

router.post("/add", (req, res) => {
  // 상품등록 처리
  console.log(req.body);
  res.send("Products adddddd");
});

module.exports = router;
// 외부로 내보낼 수 있도록
