// SERVER-SIDE JAVASCRIPT
var db = require('./models');
//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

////ROUTES

////HTML END POINTS
app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

/////JSON API ENDPOINTS
app.get('/api', controllers.api.index);

app.get('/api/articles', controllers.articles.index);

app.post('/api/articles', controllers.articles.create);

app.get('/api/articles/:articleId', controllers.articles.show);

app.delete('/api/articles/:articleId', controllers.articles.destroy);

app.put('/api/articles/:articleId', controllers.articles.update);

app.get('/api/articleTagWords/:tagWordId/articles', function (req, res) {
  db.ArticleTagWord
    .find({_tagWord: req.params.id})
    .exec(function(err, artTagWords){
      console.log(err);

      var article_ids = artTagWords.map(function(a){ return a._article; });
      db.Article.find({
        _id: {$in: article_ids}
      })
      .exec(function(err, articles){
        console.log(err);
        console.log("Articles with Tag Id", req.params.id);
        console.log(articles);
        res.json(articles);
      });
    });
  });

app.get('/api/articleTagWords', controllers.articleTagWords.index);

app.get('/api/articleTagWords/:articleTagWordsId', controllers.articleTagWords.show);

app.post('/api/articleTagWords', controllers.articleTagWords.create);

app.get('/api/tagWords', controllers.tagWords.index);

app.get('/api/tagWords/:tagWordId', controllers.tagWords.show);

app.post('/api/tagWords', controllers.tagWords.create);

app.delete('/api/tagWords/:tagWordId', controllers.tagWords.destroy);

app.put('/api/tagWords/:tagWordId', controllers.tagWords.update);

//////SERVER

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
