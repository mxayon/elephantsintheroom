var db = require('../models');
// GET /api/albums
function index(req, res) {
  db.tagWords.find({}, function(err, allTagWords) {
    if (err) {
      res.send(404);
      return;
    }
    res.json(allTagWords);
  });
  }
