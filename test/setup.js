process.env.NODE_ENV = 'test'

const { shallow, mount, render } = require('enzyme')
const chai = require('chai')
const expect = chai.expect
const jsdom = require('jsdom').jsdom

beforeEach(() => {
  global.document = jsdom('')
  global.window = document.defaultView;
  global.navigator = {
    userAgent: 'node.js'
  }
})

module.exports = {
  chai,
  expect,
  shallow,
  mount,
  render,
}
