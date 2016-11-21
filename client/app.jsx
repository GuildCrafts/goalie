import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return <div>Hey Wuz Up!</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
