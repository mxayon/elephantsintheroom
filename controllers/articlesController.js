var db = require('../models');
// GET /api/albums
function index(req, res) {
  db.Article.find({}, function(err, allArticles) {
    if (err) {
      res.send(404);
      return;
    }
    res.json(allArticles);
  });
  }

function show(req, res) {
  db.Article.findById(req.params.articleId, function(err, foundArticle) {
  if(err) { console.log('articlesController.show error', err); }
  console.log('articlesController.show responding with', foundArticle);
  res.json(foundArticle);
});
}
function create(req, res) {
  db.Article.create(req.body, function(err, article) {
    if (err) { console.log('error', err); }
    console.log(article);
    res.json(article);
  });
}

  module.exports = {
    index: index,
    create: create,
    show: show
  };
