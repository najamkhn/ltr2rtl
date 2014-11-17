"use strict"
var connect    = require("connect"),
    http       = require('http'),
    harp       = require("harp"),
    flipCSS    = require("css-flip"),
    bodyParser = require("body-parser"),
    serveStatic = require('serve-static'),
    app        = connect();


app.use(serveStatic(__dirname + "/src"));
app.use(harp.mount(__dirname + "/src"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/process', function (req, res) {
  var css = req.body.text,
      result = flipCSS(css);
  res.statusCode = 200;
  res.end(result);
});

app.listen(9000);
