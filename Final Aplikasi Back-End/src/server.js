import http from "http";
import booksRoutes from "./routes/books.js";

const PORT = process.env.APP_PORT || 9000;

const server = http.createServer((req, res) => {
    booksRoutes(req, res);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
