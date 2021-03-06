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
  // after creation of article below, you have to find the tag word from the database using the params
  // after you have found the tag word
  // you take the article id and the tag word id and create a new ArticleTagWord using those ids
  // for example ArticleTagWord.create({_article: articl._id, _tagWord: tagword._id}, function(err, atagword) {
  //  res.json(atagword);
  // });
  db.Article.create(req.body, function(err, article) {
    if (err) { console.log('error', err); }
    console.log(article);
    res.json(article);
  });
}

function destroy(req, res) {
  db.Article.findOneAndRemove({ _id: req.params.articleId }, function(err, foundArticle){
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
