console.log('hello world!');

var express = require('express');
var app = express();

app.set('trust proxy', 'loopback');

app.get('/', function (req, res) {
  console.log('client', req.ip);
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

