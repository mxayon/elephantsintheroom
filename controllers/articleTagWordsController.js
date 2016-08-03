var db = require('../models');
// GET /api/albums --> Tunely? TODO: Remove this
function index(req, res) {
  db.ArticleTagWord.find({}, function(err, AllArticleTagWords) {
    if (err) {
      res.send(404);
      return;
    }
    res.json(AllArticleTagWords);
  });
}

function show(req, res) {
  db.ArticleTagWord.findById(req.params.articleTagWordsId, function(err, foundarticleTagWord) {
    if(err) { console.log('articleTagWordsController.show error', err); }
    console.log('articleTagWordsController.show responding with', foundarticleTagWord);
    res.json(foundarticleTagWord);
  });
}

function create(req, res) {
  db.ArticleTagWord.create(req.body, function(err, articleTagWord) {
    if (err) { console.log('error', err); }
    console.log(articleTagWord);
    res.json(articleTagWord);
  });
}

module.exports = {
  index: index,
  show: show,
  create: create,
};
