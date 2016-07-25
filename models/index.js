var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/crow-project1");

module.exports.Article = require('./article.js');

module.exports.TagWord = require('./tagWord.js');

module.exports.ArticleTagWord = require('./articleTagWord.js');


mongoose.connect( process.env.MONGODB_URI || "YOUR CURRENT LOCALHOST DB CONNECTION STRING HERE" );
