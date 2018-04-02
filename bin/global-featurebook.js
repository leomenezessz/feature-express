#!/usr/bin/env node

let express = require('express');
let reader = require('../lib/reader.js');
let app = express();
let path = process.argv[2];
app.set('views','./views/');
app.engine('html', require('ejs').renderFile);

app.get('/cs-featurebook' , (req, res) => reader.generateHashOfFilesByPath(path).then(contentFeature => 
  contentFeature == undefined  || Object.keys(contentFeature).length==0 ? res.render('error-page', {err :"File or Directory dont exist!"}) :  res.render('index.html', {contentFeature})));

app.listen(3000);

console.log("Node Server is running, baby !");

module.exports = app;





