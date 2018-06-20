let fs = require('fs');
let path = require('path');
let glob = require("glob")

let files = async (featuresPath) => {
   return await featuresPath === "./" ? getFeaturesFromFolderAndSubDirectories() : getFeaturesFilesFromFolder(featuresPath)
}

let getFeaturesFromFolderAndSubDirectories = ()=>{ return new Promise ((resolve, reject) =>{
    glob("**/*.feature", (err, files) => {
      files.length == 0 ? reject("Dont have any features files in directory and sub directory!!") : resolve(files);
    })
  })
}

let getFeaturesFilesFromFolder = (featuresPath)=>{ return new Promise((resolve, reject) =>{
  try {
    resolve(filterFeatureFiles(fs.readdirSync(featuresPath, 'utf8')));
  } catch (error) {
    reject(error);
  }
})
}

let filterFeatureFiles = (arrayOfFiles) => {
  return arrayOfFiles.filter(isFeature);
}

let isFeature = (fileName) => {
  return path.extname(fileName) === '.feature'
}

 let removeExtensionOfFile = (featureFileName)=>{
  return path.parse(featureFileName).name;
}

let formatedFeatures = (arrayOfFeaturesFiles, featuresPath) => {
  var contentFeature = {};
  arrayOfFeaturesFiles.forEach(fileFeature => {
    var featureFileName = removeExtensionOfFile(fileFeature);
    contentFeature[featureFileName] = [];
    fs.readFileSync(featuresPath + fileFeature, 'utf8').toString().split('\n').forEach((line, index, arr) => {
      if (!line.match(/# language:/) && !line.match(/# encoding:/)) {
        contentFeature[featureFileName].push(line);
      }
    });
  })
  return new Promise((resolve, reject) => resolve(contentFeature));
}

let generateHashOfFilesByPath = (path) => {
  return files(path).then(arrayOfFeatureFiles => 
    formatedFeatures(arrayOfFeatureFiles, path)).then(contentFeature => 
      { return contentFeature }).catch(error=>(console.log(error)))
}

module.exports = {
  files: files,
  formatedFeatures: formatedFeatures,
  filterFeatureFiles : filterFeatureFiles,
  isFeature : isFeature,
  removeExtensionOfFile : removeExtensionOfFile,
  getFeaturesFromFolderAndSubDirectories : getFeaturesFromFolderAndSubDirectories,
  getFeaturesFilesFromFolder : getFeaturesFilesFromFolder,
  generateHashOfFilesByPath: generateHashOfFilesByPath
};