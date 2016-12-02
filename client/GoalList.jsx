import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Subheader from 'material-ui/Subheader'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import goals from '../goals'
import labels from '../goals'
import moment from 'moment'

let SelectableList = makeSelectable(List)

export class SelectableGoalList extends Component {
  static PropTypes = {
    children: PropTypes.node.isRequired,
    defaultValue: PropTypes.number.isRequired,
  }

  constructor(props){
    super(props)
    this.state = {
      selectedIndex: goals[0],
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

export default class GoalSelectItem extends React.Component {
  updatedAtText() {
    const { updated_at } = this.props

   return moment( updated_at ).format( 'MMM Do YYYY' )
  }

  nestedItems() {
    const { number, body, labels } = this.props
    return [
      <ListItem primaryText={number} secondaryText={body} />,
      <ListItem primaryText={labels.name} secondaryText={this.updatedAtText()} />
    ]
  }

  render() {
    const { id, title, user } = this.props

    return (
      <ListItem key={id}
        primaryText={title}
        secondaryText={user.login}
        value={id}
        nestedItems={this.nestedItems()}
       />
    )
  }
}
