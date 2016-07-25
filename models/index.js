var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/elephantsintheroom");

module.exports.Article = require('./article.js');

module.exports.TagWord = require('./tagWord.js');

module.exports.ArticleTagWord = require('./articleTagWord.js');
