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

function destroy(req, res) {
  db.Article.findOneAndRemove({ _id: req.params.articleId }, function(err, foundArticle){
// note you could send just send 204, but we're sending 200 and the deleted entity
  console.log("destroyed album : ", foundArticle);
  res.json(foundArticle);
  });
  }

function update(req, res) {
    db.Article.findById(req.params.articleId, function(err, foundArticle){
      console.log(req.body);
      foundArticle.articleUrl=req.body.articleUrl,
      foundArticle.title=req.body.title,
      foundArticle.description=req.body.description,
      foundArticle.imageUrl=req.body.imageUrl,
      foundArticle.author=req.body.author,
      foundArticle.location=req.body.location,
      foundArticle.date=req.body.date,
      foundArticle.compassionScale=req.body.compassionScale,
      foundArticle.save(function(err, updatedArticle){
        if (err) {
          return console.log("create error: " + err);
        }
        res.json(updatedArticle);
      });
    });
}

  module.exports = {
    index: index,
    create: create,
    show: show,
    destroy: destroy,
    update: update
  };
