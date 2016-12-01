import React, { Component, PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactDOM from 'react-dom'
import GoalList from './GoalList.jsx'
import ListExampleSelectable from './GoalList.jsx'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ListExampleSelectable />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
