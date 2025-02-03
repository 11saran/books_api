const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  addBook,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../Controllers/Controllers");

router.get("/getAllBooks", getAllBooks);
router.post("/addBook", addBook);
router.get("/getSingleBook/:id", getSingleBook);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);

module.exports = router;