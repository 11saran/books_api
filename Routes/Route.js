const express = require("express");
const router = express.Router();
const validateBook = require("../Middleware/validation");
const {
  getAllBooks,
  addBook,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../Controllers/Controllers");

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - name
 *         - author
 *         - publishedYear
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the book
 *         name:
 *           type: string
 *           description: The name of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         publishedYear:
 *           type: integer
 *           description: The year the book was published
 *       example:
 *         id: 1
 *         name: "Rich Dad Poor Dad"
 *         author: " Robert T. Kiyosaki"
 *         publishedYear: 1997
 */

/**
 * @swagger
 * /api/getAllBooks:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: List of all books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       404:
 *         description: No books found
 */
router.get("/getAllBooks", getAllBooks);

/**
 * @swagger
 * /api/addBook:
 *   post:
 *     summary: Add a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Book added successfully
 *       500:
 *         description: Internal Server Error
 */
router.post("/addBook", validateBook, addBook);

/**
 * @swagger
 * /api/getSingleBook/{id}:
 *   get:
 *     summary: Get a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the book
 *     responses:
 *       200:
 *         description: Book found
 *       404:
 *         description: Book not found
 */
router.get("/getSingleBook/:id", getSingleBook);

/**
 * @swagger
 * /api/updateBook/{id}:
 *   put:
 *     summary: Update a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       404:
 *         description: Book not found
 */
router.put("/updateBook/:id", validateBook, updateBook);

/**
 * @swagger
 * /api/deleteBook/{id}:
 *   delete:
 *     summary: Delete a book
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the book
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete("/deleteBook/:id", deleteBook);

module.exports = router;
