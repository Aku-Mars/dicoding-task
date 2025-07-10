import { nanoid } from "nanoid";

const books = [];

export const index = (req, res) => {
    const { name, reading, finished } = req.query;

    let filteredBooks = books;

    // Filter berdasarkan name
    if (name) {
        filteredBooks = filteredBooks.filter((book) =>
            book.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    // Filter berdasarkan reading
    if (reading !== undefined) {
        const isReading = reading === '1';
        filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
    }

    // Filter berdasarkan finished
    if (finished !== undefined) {
        const isFinished = finished === '1';
        filteredBooks = filteredBooks.filter((book) => book.finished === isFinished);
    }

    const responseBooks = filteredBooks.map(({ id, name, publisher }) => ({
        id,
        name,
        publisher,
    }));

    res.writeHead(200);
    res.end(JSON.stringify({
        status: "success",
        data: { books: responseBooks },
    }));
};

export const show = (id, res) => {
    const book = books.find((b) => b.id === id);
    if (!book) {
        res.writeHead(404);
        res.end(JSON.stringify({ status: "fail", message: "Buku tidak ditemukan" }));
        return;
    }
    res.writeHead(200);
    res.end(JSON.stringify({ status: "success", data: { book } }));
};

export const store = (req, res) => {
    let body = "";
    req.on("data", (chunk) => { body += chunk; });
    req.on("end", () => {
        const { name, year, author, summary, publisher, pageCount, readPage, reading } = JSON.parse(body);
        
        if (!name) {
            res.writeHead(400);
            return res.end(JSON.stringify({ status: "fail", message: "Gagal menambahkan buku. Mohon isi nama buku" }));
        }
        if (readPage > pageCount) {
            res.writeHead(400);
            return res.end(JSON.stringify({ status: "fail", message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount" }));
        }

        const id = nanoid();
        const insertedAt = new Date().toISOString();
        const newBook = { id, name, year, author, summary, publisher, pageCount, readPage, reading, finished: pageCount === readPage, insertedAt, updatedAt: insertedAt };
        books.push(newBook);

        res.writeHead(201);
        res.end(JSON.stringify({ status: "success", message: "Buku berhasil ditambahkan", data: { bookId: id } }));
    });
};

export const update = (id, req, res) => {
    let body = "";
    req.on("data", (chunk) => { body += chunk; });
    req.on("end", () => {
        const { name, year, author, summary, publisher, pageCount, readPage, reading } = JSON.parse(body);
        const book = books.find((b) => b.id === id);

        if (!book) {
            res.writeHead(404);
            return res.end(JSON.stringify({ status: "fail", message: "Gagal memperbarui buku. Id tidak ditemukan" }));
        }

        if (!name) {
            res.writeHead(400);
            return res.end(JSON.stringify({ status: "fail", message: "Gagal memperbarui buku. Mohon isi nama buku" }));
        }

        if (readPage > pageCount) {
            res.writeHead(400);
            return res.end(JSON.stringify({ status: "fail", message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount" }));
        }

        book.name = name;
        book.year = year;
        book.author = author;
        book.summary = summary;
        book.publisher = publisher;
        book.pageCount = pageCount;
        book.readPage = readPage;
        book.reading = reading;
        book.finished = pageCount === readPage;
        book.updatedAt = new Date().toISOString();

        res.writeHead(200);
        res.end(JSON.stringify({ status: "success", message: "Buku berhasil diperbarui" }));
    });
};

export const destroy = (id, res) => {
    const index = books.findIndex((b) => b.id === id);
    if (index === -1) {
        res.writeHead(404);
        return res.end(JSON.stringify({ status: "fail", message: "Buku gagal dihapus. Id tidak ditemukan" }));
    }

    books.splice(index, 1);
    res.writeHead(200);
    res.end(JSON.stringify({ status: "success", message: "Buku berhasil dihapus" }));
};