const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookProgressSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    status: {
        type: String,
        required: true,
        enum: ["To Read", "Currently Reading", "Read", "Did Not Finish"],
        default: "To Read",
    },
    progress: { type: Number, min: 0, max: 100 },
    started_reading: { type: Date },
    finished_reading: { type: Date },
});

BookProgressSchema.virtual("url").get(function () {
    return `/catalog/bookprogress/${this._id}`;
});

module.exports = mongoose.model("BookProgress", BookProgressSchema);
