var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('project', express.static(__dirname + '/public/project/client/views'));
app.use('project/css', express.static(__dirname + '/public/project/css'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);
