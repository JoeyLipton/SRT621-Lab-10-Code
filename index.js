const express = require('express'),
    app = express(),
    controller = require('./controllers/homeController')

const mongoose = require('mongoose');

require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
    MONGO_URI,
    { useUnifiedTopology : true })
    .then((result) => console.log("Server Successfully Launched"))
    .catch((err) => console.log(err));

app.set("port", 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", controller.sendIndex);
app.get("/home", controller.sendIndex);
app.get("/books/:bookNumber", controller.sendImage);

