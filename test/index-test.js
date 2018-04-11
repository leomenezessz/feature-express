
let chai = require('chai') , chaiHttp = require('chai-http');
let app = require('../bin/global-feature-express.js');
let expect = require('chai').expect;
chai.use(chaiHttp);

describe("Route Test", () => 
    it("GET /cs-featurebook", async () => {
         await chai.request(app).get('/cs-featurebook').then((res)=>{
             expect(res['text']).to.be.not.null;
             expect(res['status']).equals(200);
         })
    })
);

after(()=>(process.exit(0)));



