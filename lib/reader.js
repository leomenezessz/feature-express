let fs = require ('fs');
let path = require('path');

let files = (featuresPath) => {
    return new Promise ((resolve, reject) => {
    try {
      resolve(fs.readdirSync(featuresPath, 'utf8'))
    } catch (error) {
      reject(error)
    }
  });
}

 isFeature = (fileName) => {
  return path.extname(fileName) === '.feature'
}

let filterFeatureFiles = (arrayOfFiles) => {
  return  new Promise ((resolve, reject) => resolve(arrayOfFiles.filter(isFeature)));
};

let formatedFeatures = (arrayOfFeaturesFiles, featuresPath) => {
  var contentFeature = {};
  arrayOfFeaturesFiles.forEach(fileFeature => {
    contentFeature[fileFeature] = [];
    fs.readFileSync(featuresPath + fileFeature, 'utf8').toString().split('\n').forEach((line, index, arr) => {
      contentFeature[fileFeature].push(line);
    });
  })
  
  return  new Promise ((resolve, reject) => resolve(contentFeature));
}

let generateHashOfFilesByPath = (path = './') => {
 return files(path).then(arrayOfFiles => filterFeatureFiles(arrayOfFiles))  
       .then(arrayOfFeatureFiles => formatedFeatures(arrayOfFeatureFiles, path))
       .then(contentFeature => { return contentFeature })
       .catch(err => console.log(err));
}

module.exports = {
  files: files,
  filterFeatureFiles: filterFeatureFiles,
  formatedFeatures :formatedFeatures,
  generateHashOfFilesByPath : generateHashOfFilesByPath,
  isFeature : isFeature
};
