const Book = require('./models/Book');

const store = (books) => {

  Promise.all[books.map(book => {
    Book.insert(book);
  })];

};

module.exports = store;
