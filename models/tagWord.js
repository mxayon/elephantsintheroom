var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Article = require('./article');
var ArticleTagWord = require('./articleTagWord');

var TagWordSchema = new Schema({
  name: String,
});




var TagWord = mongoose.model('TagWord', TagWordSchema);

module.exports = TagWord;
