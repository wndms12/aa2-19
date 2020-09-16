//app.js
var express = require("express");
var app = express();
var port = 3000;

app.get("/", function(req, res) {
  res.send('<a href="/hello">Hello Page</a>');
});

app.get("/Hello", function(req, res) {
  res.send("Hello aa19");
});

app.get("/comsi", function(req, res) {
  res.send("Hello comsi!");
});

app.get("/aa19", function(req, res) {
  res.send("Hello aa19, comsi! My first express server!!!");
});

app.get("/naver", function(req, res) {
  res.send('<a href="http://www.naver.com">Go to naver</a>');
});

//listening requests from clients
var server = app.listen(port, function() {
  console.log("Listening on port %d", server.address().port);
});
