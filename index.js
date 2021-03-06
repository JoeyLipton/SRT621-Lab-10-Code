const express = require('express'),
    app = express(),
    controller = require('./controllers/homeController')

const layouts = require("express-ejs-layouts");

const mongoose = require('mongoose'),
    Books = require("./models/books")

require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
    MONGO_URI,
    { useUnifiedTopology : true })
    .then((result) => console.log("Server Successfully Launched on localhost:3000/home"))
    .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(layouts);

app.get("/home", controller.getAllBooks, (req, res, next) => {
    res.render("index", { books: req.data }
    )
})

app.get("/", (req, res) => {
    res.redirect("/home")
    });

app.get("/books/:bookNumber", controller.sendBook);

app.listen(3000);

