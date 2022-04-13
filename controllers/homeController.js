const path = require("path");

exports.sendHome = (req, res) => {
    res.redirect("index");
}

exports.sendIndex = (req, res) => {
    res.render("index");
}

exports.sendBook = (req, res) => {
    const book = req.params.book;
    res.render(book);
}