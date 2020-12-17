const Book = require('./models/Book');

const store = books => {

  return Promise.all(books.map(book => {
    return Book.insert(book);
  }));

};

module.exports = store;
