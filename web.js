var express = require('express');

var app = express.createServer(express.logger());


Var fs =require('fs');

var contents = function(name){
    return fs.readFileSync(name, "utf8");
}


app.get('/', function(request, response) {
  response.send(contents('index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
