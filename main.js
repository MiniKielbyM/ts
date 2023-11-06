var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use(express.static('public'))
app.use(express.static(__dirname + '/node_modules'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/test.html');
});
console.log("development server started at port 8080")
server.listen(8080);
