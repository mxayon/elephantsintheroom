var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/crow-project1");

module.exports.Article = require('./article.js');

module.exports.TagWord = require('./tagWord.js');
