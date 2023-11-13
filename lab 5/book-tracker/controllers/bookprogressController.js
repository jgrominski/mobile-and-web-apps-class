const BookProgress = require("../models/bookprogress");
const asyncHandler = require("express-async-handler");

exports.bookprogress_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookProgress list");
});

exports.bookprogress_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: BookProgress detail: ${req.params.id}`);
});

exports.bookprogress_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookProgress create GET");
});

exports.bookprogress_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookProgress create POST");
});

exports.bookprogress_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookProgress delete GET");
});

exports.bookprogress_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookProgress delete POST");
});

exports.bookprogress_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookProgress update GET");
});

exports.bookprogress_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookProgress update POST");
});
