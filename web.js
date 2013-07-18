var express = require('express');

var app = express.createServer(express.logger());


var fs =require('fs');

var contents = function(name){
    return fs.readFileSync(name, "utf8");
};


app.get('/', function(request, response) {
  response.send(contents('index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
