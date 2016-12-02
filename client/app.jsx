import React, { Component, PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactDOM from 'react-dom'
import SelectableGoalList from './GoalList.jsx'
import GoalSelectItem from './GoalList.jsx'
import goals from '../goals'
import labels from '../goals'

// delete me
import {List} from 'material-ui/List'

export default class App extends Component {
  render() {
    const goalNodes = goals.map( goal => <GoalSelectItem {...goal} /> )
    const labelNodes = labels.map( label => <GoalSelectItem {...label} />)
    return (
      <MuiThemeProvider>
        <List>
          {goalNodes}
          {labelNodes}
        </List>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
