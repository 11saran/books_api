const express = require('express');
const router = express.Router();
const validateBook = require("../Middleware/validation")
const {
  getAllBooks,
  addBook,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../Controllers/Controllers");

router.get("/getAllBooks", getAllBooks);
router.post("/addBook", validateBook, addBook);
router.get("/getSingleBook/:id", getSingleBook);
router.put("/updateBook/:id", validateBook, updateBook);
router.delete("/deleteBook/:id", deleteBook);

module.exports = router;