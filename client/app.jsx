import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>Hi there</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
