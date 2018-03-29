let chai = require('chai') , chaiHttp = require('chai-http');
let app = require('../index.js');
let expect = require('chai').expect;
chai.use(chaiHttp);

describe("Route Test", () => 
    it("GET /cs-featurebook", async () => {
         res = await chai.request(app).get('/cs-featurebook');
         expect(res['text']).to.be.not.null;
         expect(res['status']).equals(200);
    })
);