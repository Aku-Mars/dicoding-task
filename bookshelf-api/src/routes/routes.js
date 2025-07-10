const addBookHandler = require("../handlers/addBook");
const updateBookHandler = require("../handlers/updateBook");
const getBookByIdHandler = require("../handlers/getBookById");
const getAllBookHandler = require("../handlers/getAllBook");
const deleteBookHandler = require("../handlers/deleteBook");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBookHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBookHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookHandler,
  },
];

module.exports = routes;
