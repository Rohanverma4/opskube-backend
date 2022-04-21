const express = require("express");
const book_controller = require("./controllers/book_controller.js")

const app = express();

app.use(express.json())

app.use("/books",book_controller)

module.exports = app;