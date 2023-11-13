const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    second_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
    let fullname = "";
    if (this.first_name && this.second_name) {
        fullname = `${this.second_name}, ${this.first_name}`;
    }

    return fullname;
});

AuthorSchema.virtual("url").get(function () {
    return `/catalog/author/${this._id}`;
});

module.exports = mongoose.model("Author", AuthorSchema);