let books = []; //For in-memory storage of books

//Get all books
const getAllBooks = (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedBooks = books.slice(startIndex, endIndex);

    if (books.length === 0) {
      return res.status(404).json(books);
    }
    res.status(200).json({
      page,
      limit,
      totalBooks: books.length,
      totalPages: Math.ceil(books.length / limit),
      books: paginatedBooks,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//Add new Book
const addBook = (req, res) => {
  try {
    const { name, author, publishedYear } = req.body;
    const newBook = {
      id: books.length + 1,
      name,
      author,
      publishedYear,
    };
    books.push(newBook);
    res.status(201).json(newBook);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//Get single book
const getSingleBook = (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//Update book

const updateBook = (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const { name, author, publishedYear } = req.body;
    const bookIndex = books.findIndex((b) => b.id === bookId);
    if (bookIndex === -1) {
      return res.status(404).json({ message: "Book not found" });
    }

    books[bookIndex] = {
      id: bookId,
      name,
      author,
      publishedYear,
    };

    res.status(200).json({ message: "Book Updated Successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//Delete book
const deleteBook = (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex((b) => b.id === bookId);
    if (bookIndex === -1) {
      return res.status(404).json({ message: "Book not found" });
    }
    books.splice(bookIndex, 1);
    res.status(200).json({ message: "Book Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllBooks,
  addBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
