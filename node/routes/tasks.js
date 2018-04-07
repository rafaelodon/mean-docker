var express = require('express');
var router = express.Router();

tasks = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ list : tasks });
});

router.post('/', function(req, res, next) {
  var task = req.body;
  tasks.push({
    title: task.title,
    description: task.description,
    state : task.state,
    date : new Date()
  });
  res.send();
});

module.exports = router;
