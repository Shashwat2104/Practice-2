// title , author, genre, year, available

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: [true, "Yes it is available"],
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
