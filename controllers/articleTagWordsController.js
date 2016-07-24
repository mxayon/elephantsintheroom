var db = require('../models');
// GET /api/albums
function index(req, res) {
  db.ArticleTagWord.find({}, function(err, AllArticleTagWords) {
    if (err) {
      res.send(404);
      return;
    }
    res.json(AllArticleTagWords);
});
}

module.exports = {
  index: index,
};
