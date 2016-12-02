require('dotenv').config()

const chai = require('chai')
const chaiHTTP = require('chai-http')
const should = chai.should()
const {expect} = chai
const nock = require('nock')

const server = require('../app')
const nockGitHubUserAPI = require('./oauth-response')

chai.use(chaiHTTP)

describe('Auth Routes', done => {
  before(done => {
    nock.enableNetConnect()
    nockGitHubUserAPI(nock)
    done()
  })
  after(done => {
    nock.cleanAll()
    done()
  })
  describe('POST /auth/login route', () => {
    it('redirects to github for login/approve page', done => {
      chai.request(server)
        .get('/auth/login')
        .redirects(0)
        .end((error, response) => {
          response.body.should.be.a('object')
          response.body.should.be.eql({})
          expect(response.status).to.eql(302)
          expect(response.headers['location']).to
            .match(/^https:\/\/github.com\/login\/oauth\/authorize/)
          done()
        })
    })
  })
  describe('github callback', () => {
    it('should poll github api for details', done => {
      const agent = chai.request.agent(server)
      agent.get('/auth/oauth_callback')
        .query({code:'9835b716e83875665b21'})
        .end((error, response) => {
          expect(response.text).to.match(/(Bobby Walker)/)
          done()
        })
    })
  })
  describe('logout', () => {
    it('it should end the session and show login', done => {
      chai.request(server)
        .get('/auth/logout')
        .end((error, response) => {
          response.should.have.status(200)
          response.body.should.be.a('object')
          response.body.should.be.eql({})
          done()
        })
    })
  })
})
