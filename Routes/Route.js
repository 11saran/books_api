const express = require('express');
const router = express.Router();
const { getAllBooks } = require("../Controllers/Controllers");

router.get("/getAllBooks", getAllBooks);

module.exports = router;