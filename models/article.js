var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
  articleUrl: String,
  title: String,
  imageUrl: String,
  author: String,
  location: String,
  date: String,
  source: String,
  people: String,
  mood: String
});


var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
