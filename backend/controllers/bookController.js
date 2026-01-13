const Book = require("../models/Book");

exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(books);
  } catch (error) {
    next(error);
  }
};


exports.addBook = async (req, res, next) => {
  try {
    const { title, author } = req.body;

    if (!title || !author) {
      return res
        .status(400)
        .json({ message: "Title and Author are required" });
    }

    const book = await Book.create({
      title,
      author,
      user: req.user._id,
    });

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};
