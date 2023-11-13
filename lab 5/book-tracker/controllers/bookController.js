const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookProgress = require("../models/bookprogress");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    const [
        numBooks,
        numBooksCurrentlyReading,
        numBooksToRead,
        numBooksRead,
        numAuthors,
        numGenres,
    ] = await Promise.all([
        Book.countDocuments({}).exec(),
        BookProgress.countDocuments({ status: "Currently Reading" }).exec(),
        BookProgress.countDocuments({ status: "To Read" }).exec(),
        BookProgress.countDocuments({ status: "Read" }).exec(),
        Author.countDocuments({}).exec(),
        Genre.countDocuments({}).exec(),
    ]);

    res.render("index", {
        title: "Book Tracker Home",
        book_count: numBooks,
        book_progress_currently_reading_count: numBooksCurrentlyReading,
        book_progress_to_read_count: numBooksToRead,
        book_progress_read_count: numBooksRead,
        author_count: numAuthors,
        genre_count: numGenres,
    });
});

exports.book_list = asyncHandler(async (req, res, next) => {
    const allBooks = await Book.find({}, "title author")
        .sort({ title: 1 })
        .populate("author")
        .exec();

    res.render("book_list", { title: "Book List", book_list: allBooks });
});

exports.book_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
});

exports.book_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book create GET");
});

exports.book_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book create POST");
});

exports.book_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book delete GET");
});

exports.book_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book delete POST");
});

exports.book_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book update GET");
});

exports.book_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book update POST");
});
