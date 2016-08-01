var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Don't require these files here if you're not going to use them in your schema
var Article = require('./article.js');
var ArticleTagWord = require('./articleTagWord.js');

var TagWordSchema = new Schema({
  name: String
});




var TagWord = mongoose.model('TagWord', TagWordSchema);

module.exports = TagWord;
