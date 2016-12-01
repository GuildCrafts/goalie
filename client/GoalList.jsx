import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Subheader from 'material-ui/Subheader'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import goals from '../goals'
import moment from 'moment'

let SelectableList = makeSelectable(List)

class SelectableGoalList extends Component {
  static PropTypes = {
    children: PropTypes.node.isRequired,
    defaultValue: PropTypes.number.isRequired,
  }

  constructor(props){
    super(props)
    this.state = {
      selectedIndex: goals[0].id,
    }
  }

  handleRequestChange = (event, index, labels) => {
    this.setState({
      selectedIndex: index,
    })
  }

  render() {
    return (
      <SelectableList
        value={this.state.selectedIndex}
        onChange={this.handleRequestChange}
      >
        {this.props.children}
      </SelectableList>
    )
  }
}

const GoalList = () => {
  const goalNodes = goals.map(goal =>
    <ListItem
      key={goal.id}
      primaryText={goal.title}
      secondaryText={goal.user.login}
      value={goal.id}
      nestedItems={[
        <ListItem
          primaryText={goal.number}
          secondaryText={goal.body}
        />,
        <ListItem
          primaryText={goal.labels[{name}]}
          secondaryText={moment(goal.updated_at).format('MMM Do YYYY')}
        />,
      ]}
    />
  )
  return (
    <SelectableGoalList>
      <Subheader>GOALIE</Subheader>
      {goalNodes}
      <Subheader>CONVERSATION</Subheader>
    </SelectableGoalList>
  )
}

export default GoalList
