const chai = require('chai')
const chaiHTTP = require('chai-http')
const server = require('../app')
const should = chai.should()

var path = require('path');
var dotEnvPath = path.resolve('./.env');
require('dotenv').config({ path: dotEnvPath});

chai.use(chaiHTTP)

describe('Auth: ', () => {
  describe('/auth/login route', () => {
    it('redirects to github for log in', (done) => {
      chai.request(server)
      .get('/auth/login')
      .end((err, response) => {
        response.should.have.status(200)
        response.headers.should.have.property('server').eql('GitHub.com')
        done()
      })
    });
  })

  describe('/auth/oauth_callback route', () => {
    it('redirects to github for log in', (done) => {
      chai.request(server)
      .get('/auth/login')
      .end((err, response) => {
        // should return json/object
        // object should have user section
        // code should be in the query
        // user should have access to @GuildCrafts
        response.should.have.status(200)
        done()
      })
    });
  })
})
