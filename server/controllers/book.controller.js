// console.log("controller");

const Book = require("./../models/book.model");

module.exports = {
  getAllBooks: (req, res) => {
    Book.find()
      .then(books => res.json(books))
      .catch(err => res.json(err));
  },
  getOneBook: (req, res) => {
    Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.json(err));
  },
  createBook: (req, res) => {
    Book.create(req.body)
      .then(newBook => res.json(newBook))
      .catch(err => res.json(err));
  },
  updateBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .then(updatedBook => res.json(updatedBook))
      .catch(err => res.json(err));
  },
  deleteBook: (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  },
}