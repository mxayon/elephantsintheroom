var db = require('../models');
// GET /api/albums
function index(req, res) {
  db.TagWord.find({}, function(err, allTagWords) {
    if (err) {
      res.send(404);
      return;
    }
    res.json(allTagWords);
  });
  }
function show(req, res) {
  db.TagWord.findById(req.params.tagWordId, function(err, foundTagWord) {
  if(err) { console.log('tagWordsController.show error', err); }
  console.log('tagWordsController.show responding with', foundTagWord);
  res.json(foundTagWord);
});
}

function create(req, res) {
  db.TagWord.create(req.body, function(err, tagWord) {
  if (err) { console.log('error', err); }
  console.log(tagWord);
  res.json(tagWord);
});
}



module.exports = {
  index: index,
  create: create,
  show: show
};
