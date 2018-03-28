let chai = require('chai');
let expect = require('chai').expect;
let assert = require('chai').assert;
let reader = require('../reader.js');

//TODO : WRITE TESTS

describe ("Reader Tests", async () =>{
    it("Sould return array of files from directory", ()=>{
       const array = await reader.files();
       expect(array).to.be.equal();
    })
});