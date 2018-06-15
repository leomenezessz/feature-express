let chai = require('chai');
let expect = require('chai').expect;
let assert = require('chai').assert;
let reader = require('../lib/reader.js');
let contentFeaturesFiles = require('./content-features-files');
let fs = require ('fs');

let allFilesFromFolderFeatures = ['-myEnglishFeature-.feature','hello.java','hello.ruby','my-spanish_feature.feature','my_portuguese_feature.feature' ];
let onlyFeatureFilesFromFolderFeatures = ['-myEnglishFeature-.feature','my-spanish_feature.feature','my_portuguese_feature.feature'];
let featuresExamplePath = "./features-example/";
let invalidPath = "./invalid-path/";

describe ("Reader Tests", () => {
    it("Should return array of files from directory", async ()=>{
       const array = await reader.files(featuresExamplePath);
       expect(array).to.be.eql(allFilesFromFolderFeatures);
    })

    it("Should filter array of features files from array of files", async ()=>{
        const array = await reader.filterFeatureFiles(allFilesFromFolderFeatures);
        expect(array).to.be.eql(onlyFeatureFilesFromFolderFeatures);
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
});

            
     