'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = express();

var rootPath = path.normalize(__dirname);

var communicator = {};

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/data', function (req, res) {
    res.json(communicator);
});

app.get('/*', function (req, res) {
    res.sendFile(rootPath + '/public/index.html');
});

//probably move these functions to other files
app.post('/update', function (req, res) {
    communicator = req.body;
    res.send('updated');
});



var port = 3000;

app.listen(port);
console.log('listening on port ' + port);
