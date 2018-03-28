let express = require('express');
let reader = require('./reader.js');
let app = express();
let path = process.argv[2];
app.set('view engine', 'pug');

app.get('/' , (req, res) => reader.generateHashOfFilesByPath(path).then(contentFeature => 
  contentFeature != undefined ? res.render('index', {contentFeature}) : res.render('error-page', {err :"File or Directory dont exist!"})));

app.listen(3000);

console.log("Node Server is running, baby !");



 






