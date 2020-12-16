const pool = require('../utils/pool');

module.exports = class Book {
    id;
    title;
    coverImage;
    rating;
    price;
    inStock;

    constructor(row) {

      this.id = row.id;
      this.title = row.title;
      this.coverImage = row.cover_image;
      this.rating = row.rating;
      this.price = row.price;
      this.inStock = row.in_stock;

    }

    // Create: POST/insert
    static async insert({ title, coverImage, rating, price, inStock }) {
      const { rows } = await pool.query(
        'INSERT INTO books (title, cover_image, rating, price, in_stock) VALUES ($1, $2. $3. $4, $5) RETURNING *',
        [title, coverImage, rating, price, inStock]
      );

      return new Book(rows[0]);
    }

  // Read: GET/find/findById
};
