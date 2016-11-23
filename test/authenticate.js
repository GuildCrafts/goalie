require('dotenv').config()
const chai = require('chai')
const chaiHTTP = require('chai-http')
const server = require('../app')

const {expect} = chai
const should = chai.should()

chai.use(chaiHTTP)

describe('Auth: ', () => {
  describe('/auth/login route', () => {
    it('redirects to github for log in', (done) => {
      chai.request(server)
        .get('/auth/login')
        .end((error, response) => {
          expect(response).to.redirect
          response.should.have.status(200)
          response.body.should.be.a('object')
          response.headers.should.have.property('server').eql('GitHub.com')
          response.redirects.should.be.a('array')
          done()
        })
        .then(callbackUrl => {
          chai.request(callbackUrl.redirects[0])
            .get('/')
            .end((error, response) => {
              response.should.have.status(200)
              done()
            })
        })
    });
  })
})
