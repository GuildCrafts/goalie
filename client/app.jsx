import React from 'react'
import ReactDOM from 'react-dom'
import styles from './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className={styles.app}>Hi there</div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
