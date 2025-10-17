const express = require("express");
const router = express.Router();
// ★express 가 가지고 있는 Router 클래스★

//  "/" : 고객정보, "/add": 고객등록
router.get("/", (req, res) => {
  res.send("Welcome to Customers HOME page");
});

router.post("/add", (req, res) => {
  // 고객등록 처리
  console.log(req.body);
  res.send("customers addedddd");
});

module.exports = router;
// ★외부로 내보낼 수 있도록★
