#!/usr/bin/env node

let express = require('express');
let reader = require('../lib/reader.js');
let app = express();
let featurebookEndPoint = '/cs-featurebook';
let path = process.argv[2];
let language = process.argv[3] == null ? 'en' : process.argv[3];
let port = process.argv[4] == null ? 3000 :  process.argv[4];
app.use(express.static('assets'));
app.set('views','./views/');
app.engine('html', require('ejs').renderFile);

app.get(featurebookEndPoint , (req, res) => reader.generateHashOfFilesByPath(path).then(contentFeature =>
  contentFeature == undefined  || Object.keys(contentFeature).length==0 ? res.render('error-page.html', {err :"Feature files or Directory dont exist!"}) :  res.render('index.html', {contentFeature , language})));

app.listen(port);

console.log("Feature-Express is running "+"http://localhost:"+port+featurebookEndPoint);

module.exports = app;
