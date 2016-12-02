import React, { Component, PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactDOM from 'react-dom'
import SelectableGoalList from './GoalList.jsx'
import GoalSelectItem from './GoalList.jsx'
import goals from '../goals'

import {List} from 'material-ui/List'

export default class App extends Component {
  render() {
    const goalNodes = goals.map( goal => <GoalSelectItem {...goal} /> )
    return (
      <MuiThemeProvider>
        <List>
          {goalNodes}
        </List>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
