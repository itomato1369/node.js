const express = require("express");
const router = express.Router();

// "/board" get/post/put/delete 를 한 번에 다 요청
router
  .route("/board")
  .get((req, res) => {
    res.send("Board get get");
  })
  .post((req, res) => {
    res.send("Board post post");
  })
  .put((req, res) => {
    res.send("Board put putput");
  })
  .delete((req, res) => {
    res.send("Board delete del");
  });

module.exports = router;
