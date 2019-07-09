const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/reservations", {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;