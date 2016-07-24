var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Article = require('./article.js');
var ArticleTagWord = require('./articleTagWord.js');

var TagWordSchema = new Schema({
  name: String
});




var TagWord = mongoose.model('TagWord', TagWordSchema);

module.exports = TagWord;
