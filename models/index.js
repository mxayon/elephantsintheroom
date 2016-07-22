var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/crow");

module.exports.Article = require('./article.js');

module.exports.TagWord = require('./tagWord.js');
