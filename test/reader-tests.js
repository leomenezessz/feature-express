let chai = require('chai');
let expect = require('chai').expect;
let assert = require('chai').assert;
let reader = require('../lib/reader.js');
let contentFeaturesFiles = require('./content-features-files');
let fs = require ('fs');
let allFeaturesFilesFromFolder = [ '-myEnglishFeature-.feature','my-spanish_feature.feature','my_portuguese_feature.feature' ];
let allFeaturesFilesFromDirectoriesAndSubdirectories = [ 'features-example/-myEnglishFeature-.feature','features-example/my_portuguese_feature.feature','features-example/my-spanish_feature.feature','features-example/sub-features/-myEnglishSubFeature-.feature' ]
let featuresExamplePath = "./features-example/";
let rootDirectory = "./";
let invalidPath = "./invalid-path/";
let allFilesFromFolder = [ '-myEnglishFeature-.feature','hello.java','hello.ruby','my-spanish_feature.feature','my_portuguese_feature.feature','sub-features' ]


describe ("Reader Tests", () => {
    it("Should return array of features files from directory", async ()=>{
       const array = await reader.files(featuresExamplePath);
       expect(array).to.be.eql(allFeaturesFilesFromFolder);
    })

    it("Should return array of feature files from directory and sub diretorys", async ()=>{
        const array = await reader.files(rootDirectory);
        expect(array).to.be.eql(allFeaturesFilesFromDirectoriesAndSubdirectories);
     })

    it("Should filter array of features files from array of files", async ()=>{
        const array = await reader.filterFeatureFiles(allFilesFromFolder);
        expect(array).to.be.eql(allFeaturesFilesFromFolder);
    })
    
    it("Should read and format all features files from array of features files", async ()=>{
        const array = await reader.files(featuresExamplePath);
        const featuresFiles = await reader.filterFeatureFiles(array);
        const formatedFeatures = await reader.formatedFeatures(featuresFiles ,featuresExamplePath);
        expect(formatedFeatures).to.be.eql(contentFeaturesFiles);
     })

     it("Should throw exception if is a invalid path", async ()=> {
         await reader.files(invalidPath).catch(err => {
            expect(err['code']).to.be.equal("ENOENT");
        });
     });

     it("Should validate feature file extension", async ()=> {
        expect(reader.isFeature("teste.feature")).equals(true);
        expect(reader.isFeature("teste.fea")).equals(false);
    });

    it("Should remove extension of feature file", async ()=> {
        expect(reader.removeExtensionOfFile("teste.feature")).equals("teste");
    });

    it("Should return array of features files", async ()=>{
        const array = await reader.getFeaturesFilesFromFolder(featuresExamplePath);
        expect(array).to.be.eql(allFeaturesFilesFromFolder);
     })

     it("Should return array of all feature files from all folders in directory", async ()=>{
        const array = await reader.getFeaturesFromFolderAndSubDirectories(rootDirectory);
        expect(array).to.be.eql(allFeaturesFilesFromDirectoriesAndSubdirectories);
     })
});

            
     