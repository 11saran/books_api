const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  addBook,
  getSingleBook,
} = require("../Controllers/Controllers");

router.get("/getAllBooks", getAllBooks);
router.post("/addBook", addBook);
router.get("/getSingleBook/:id", getSingleBook);

module.exports = router;