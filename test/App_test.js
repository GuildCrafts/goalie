const React = require('react')
const { expect, shallow, mount } = require('./setup')


describe('Component: App', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<App />)
    expect(shallow(<App />).contains(<div id="root"/>)).to.equal(true)
  });
});
