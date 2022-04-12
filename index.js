const express = require('express');
let app = express();

const mongoose = require('mongoose');

require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
    MONGO_URI,
    { useUnifiedTopology : true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB.");
});
