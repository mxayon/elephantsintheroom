var db = require('../models');
// GET /api/albums --> Tunely?
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

function destroy(req, res) {
  db.TagWord.findOneAndRemove({ _id: req.params.tagWordId }, function(err, foundTagWord){
    console.log("destroyed album : ", foundTagWord);
    res.json(foundTagWord);
  });
}

function update(req, res) {
  db.TagWord.findById(req.params.tagWordId, function(err, foundTagWord) {
    if (err) { console.log('error', err); }
    console.log(req.body);
    foundTagWord.name=req.body.name,
    foundTagWord.save(function(err, updatedTagWord) {
      if (err) {
       console.log("create error: " + err);
      } res.json(updatedTagWord);
    });
  });
}



module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
  update: update
};
