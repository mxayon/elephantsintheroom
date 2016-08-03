var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: Don't require these files here if you're not going to use them in your schema
var Article = require('./tagWord.js');
var ArticleTagWord = require('./articleTagWord.js');

var ArticleSchema = new Schema ({
  articleUrl: String,
  title: String,
  description: String,
  imageUrl: String,
  author: String,
  location: String,
  date: String
});


var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
