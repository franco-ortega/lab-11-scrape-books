const request = require('./request');

const parser = document => {
  const books = document.querySelectorAll('.product_pod');

  return [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    coverImage: book.querySelector('img').src,
    rating: book.querySelector('.star-rating').className.split(' ')[1],
    price: book.querySelector('.price_color').textContent,
    inStock: (book.querySelector('.availability').textContent.split('\n')[3].split('        ')[1] === 'In stock')

  }));
};

request()
  .then(parser)
  .then(console.log);

module.exports = parser;
