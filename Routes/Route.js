const express = require('express');
const router = express.Router();
const { getAllBooks, addBook } = require("../Controllers/Controllers");

router.get("/getAllBooks", getAllBooks);
router.post("/addBook", addBook);

module.exports = router;