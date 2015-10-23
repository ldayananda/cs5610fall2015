var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('assignment', express.static(__dirname + '/public/assignment'));
app.use('assignment/css', express.static(__dirname + '/public/assignment/css'));
app.use('assignment/home', express.static(__dirname + '/public/assignment/home'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);

app.get("/home", function(req, res) {
    res.send("home");
});
