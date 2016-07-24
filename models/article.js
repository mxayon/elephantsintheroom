var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Article = require('./tagWord.js');
var ArticleTagWord = require('./articleTagWord.js');

var ArticleSchema = new Schema ({
  articleUrl: String,
  title: String,
  description: String,
  imageUrl: String,
  author: String,
  location: String,
  date: String,
  compassionScale: String
});


var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
