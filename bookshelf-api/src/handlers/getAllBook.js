const books = require("../data/books");

const getAllBooksHandler = (req, h) => {
  const { name, reading, finished } = req.query;

  let filteredBooks = books;
  const isReading = reading === "1";
  const isFinished = finished === "1";

  if (name !== undefined) {
    filteredBooks = filteredBooks.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (reading !== undefined) {
    filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
  }

  if (finished !== undefined) {
    filteredBooks = filteredBooks.filter(
      (book) => book.finished === isFinished,
    );
  }

  const res = h.response({
    status: "success",
    data: {
      books: filteredBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  res.code(200);

  return res;
};

module.exports = getAllBooksHandler;
