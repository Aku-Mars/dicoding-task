const books = require("../data/books");

const getBookByIdHandler = (req, h) => {
  const { bookId } = req.params;

  const book = books.find((bookData) => bookData.id === bookId);

  if (!book) {
    const res = h.response({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
    res.code(404);

    return res;
  }

  const res = h.response({
    status: "success",
    data: {
      book,
    },
  });
  res.code(200);

  return res;
};

module.exports = getBookByIdHandler;
