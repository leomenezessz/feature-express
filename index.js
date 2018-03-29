let express = require('express');
let reader = require('./reader.js');
let app = express();
let path = process.argv[2];
app.set('view engine', 'pug');

app.get('/cs-featurebook' , (req, res) => reader.generateHashOfFilesByPath(path).then(contentFeature => 
  contentFeature == undefined  || contentFeature.length==0 ? res.render('error-page', {err :"File or Directory dont exist!"}) :  res.render('index', {contentFeature})));

app.listen(3000);

console.log("Node Server is running, baby !");

module.exports = app;






