var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET users listing. */
router.get('/', function(request, response, next) {
  db.getDb((db) => {
    db.collection("tasks").find({}).toArray(function(err, result) {
      if (err) throw err;    
      response.send({ list: result});
    });
  });
});

router.post('/', function(request, response, next) {
  var task = request.body;
  task.date = new Date();
  db.getDb((db) => {
    db.collection("tasks").insertOne(task, function(err, result) {
      if (err) throw err;
      response.send();
    });
  });
});

module.exports = router;
