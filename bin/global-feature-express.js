#!/usr/bin/env node

let express = require('express');
let reader = require('../lib/reader.js');
let app = express();
let featurebookEndPoint = '/';
let envPath = process.argv[2] || "./"
let language = process.argv[3] || 'en';
let port = process.argv[4] || process.env.PORT || 3000;
let jiraUrlBase = process.argv[5] || null;

let path = require('path');

app.use(express.static(path.join(__dirname, '..', 'assets')));
app.set('views', path.join(__dirname, '..', 'views'));
app.engine('html', require('ejs').renderFile);

app.get(featurebookEndPoint , (req, res) => reader.generateHashOfFilesByPath(envPath).then(contentFeature =>
  contentFeature == undefined  || Object.keys(contentFeature).length==0 ? res.render('error-page.html', {err :"Feature files or Directory dont exist!"}) :  res.render('index.html', {contentFeature , language, jiraUrlBase})));

app.listen(port, function() {
  console.log("Feature-Express is running at "+"http://localhost:"+port+featurebookEndPoint);
}).on('error', function (err) {
  if(err.errno === 'EADDRINUSE') 
  { console.log("Port "+ port + " is already in use, please choose another port!");}
});

module.exports = app;