import React, { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component {
  render() {
    return <div>
      <h1>This page needs to work!!!</h1>
    </div>
  }
}

ReactDom.render( <App />, document.querySelector('main'))

export default App 
