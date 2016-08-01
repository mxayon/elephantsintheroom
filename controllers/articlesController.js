var db = require('../models');
// GET /api/albums --> Tunely comment?
function index(req, res) {
  db.Article.find({}, function(err, allArticles) {
    // Nice error handling!
    if (err) {
      res.send(404);
      // This return isn't necessary
      return;
    }
    res.json(allArticles);
  });
}

// Watch your indentation
function show(req, res) {
  db.Article.findById(req.params.articleId, function(err, foundArticle) {
    if(err) { console.log('articlesController.show error', err); }
    // You should remove your sanity-check console logs from 'production' (submitted) code
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
  // Nice use of comments! It's really helpful to leave notes for other devs/your future self

  // Suggestion: maybe you could include a placeholder photo of an article is submitted without an image URL?
  db.Article.create(req.body, function(err, article) {
    if (err) { console.log('error', err); }
    console.log(article);
    res.json(article);
  });
}

function destroy(req, res) {
  db.Article.findOneAndRemove({ _id: req.params.articleId }, function(err, foundArticle){
    // Needs error handling
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
