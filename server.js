var express = require("express");
var harp = require("harp");
var app = express();

// app.configure(function(){
   app.use(express.static(__dirname + "/src"));
   app.use(harp.mount(__dirname + "/src"));
// });

app.listen(9000);
