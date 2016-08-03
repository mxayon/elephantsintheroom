var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// TODO: Don't require these files here if you don't need to use them in your schema
var Article = require('./article.js');
var ArticleTagWord = require('./articleTagWord.js');

var TagWordSchema = new Schema({
  name: String
});




var TagWord = mongoose.model('TagWord', TagWordSchema);

module.exports = TagWord;
