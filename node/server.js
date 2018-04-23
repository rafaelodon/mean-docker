//Imports
var express = require('express');
var path = require('path');
var tasksRouter = require('./tasks');

//App
var app = express();

app.use(express.json());

// CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/tasks', tasksRouter);
app.listen(8080, '0.0.0.0');  
console.log("Listening on 0.0.0.0:8080")
