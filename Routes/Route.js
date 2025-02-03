const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  addBook,
  getSingleBook,
  updateBook,
} = require("../Controllers/Controllers");

router.get("/getAllBooks", getAllBooks);
router.post("/addBook", addBook);
router.get("/getSingleBook/:id", getSingleBook);
router.get("/updateBook/:id", updateBook);

module.exports = router;