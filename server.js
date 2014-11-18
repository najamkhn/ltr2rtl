'use strict';
var connect     = require('connect'),
    harp        = require('harp'),
    flipCSS     = require('css-flip'),
    bodyParser  = require('body-parser'),
    serveStatic = require('serve-static'),
    port        = process.env.PORT || 9000,
    app         = connect();


app.use(serveStatic(__dirname + '/src'));
app.use(harp.mount(__dirname + '/src'));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

app.use('/process', function (req, res) {
  var css = req.body.text,
      result = flipCSS(css);
  res.statusCode = 200;
  res.end(result);
});

app.listen(port);
console.log('http://localhost:' + port);
