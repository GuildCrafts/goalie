import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'

describe('Component: App', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<App />)
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true)
  })
})
