const express = require("express");
const router = express.Router();

const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_progress_controller = require("../controllers/bookprogressController");

router.get("/", book_controller.index);

router.get("/book/create", book_controller.book_create_get);
router.post("/book/create", book_controller.book_create_post);
router.get("/book/:id/delete", book_controller.book_delete_get);
router.post("/book/:id/delete", book_controller.book_delete_post);
router.get("/book/:id/update", book_controller.book_update_get);
router.post("/book/:id/update", book_controller.book_update_post);
router.get("/book/:id", book_controller.book_detail);
router.get("/books", book_controller.book_list);

router.get("/author/create", author_controller.author_create_get);
router.post("/author/create", author_controller.author_create_post);
router.get("/author/:id/delete", author_controller.author_delete_get);
router.post("/author/:id/delete", author_controller.author_delete_post);
router.get("/author/:id/update", author_controller.author_update_get);
router.post("/author/:id/update", author_controller.author_update_post);
router.get("/author/:id", author_controller.author_detail);
router.get("/authors", author_controller.author_list);

router.get("/genre/create", genre_controller.genre_create_get);
router.post("/genre/create", genre_controller.genre_create_post);
router.get("/genre/:id/delete", genre_controller.genre_delete_get);
router.post("/genre/:id/delete", genre_controller.genre_delete_post);
router.get("/genre/:id/update", genre_controller.genre_update_get);
router.post("/genre/:id/update", genre_controller.genre_update_post);
router.get("/genre/:id", genre_controller.genre_detail);
router.get("/genres", genre_controller.genre_list);

router.get("/bookprogress/create", book_progress_controller.bookprogress_create_get);
router.post("/bookprogress/create", book_progress_controller.bookprogress_create_post);
router.get("/bookprogress/:id/delete", book_progress_controller.bookprogress_delete_get);
router.post("/bookprogress/:id/delete", book_progress_controller.bookprogress_delete_post);
router.get("/bookprogress/:id/update", book_progress_controller.bookprogress_update_get);
router.post("/bookprogress/:id/update", book_progress_controller.bookprogress_update_post);
router.get("/bookprogress/:id", book_progress_controller.bookprogress_detail);
router.get("/bookprogresss", book_progress_controller.bookprogress_list);

module.exports = router;
