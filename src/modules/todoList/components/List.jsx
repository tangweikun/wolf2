import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'

import CreateTask from '../containers/CreateTask'
import Task from './Task'

export default class TodoList extends React.Component {
  componentDidMount() {
    axios
      .get('tasks', {})
      .then(response => this.props.getTasks(response.data))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div
        style={{
          width: '500px',
          backgroundColor: '#fff',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <RaisedButton
            style={{ marginLeft: '1px' }}
            label="TODO"
            backgroundColor="rgb(0, 188, 212)"
            labelColor="#fff"
          />
          <RaisedButton
            style={{ marginLeft: '1px' }}
            label="DONE"
            backgroundColor="#C0C0C0"
            labelColor="#fff"
          />
          <RaisedButton
            style={{ marginLeft: '1px' }}
            label="DELETED"
            backgroundColor="#C0C0C0"
            labelColor="#fff"
          />
        </div>
        <div style={{ border: '1px dotted #d3d3d3' }}>
          <CreateTask />
          {this.props.tasks.map(item =>
            <Task item={item} key={item._id} getTasks={this.props.getTasks} />,
          )}
        </div>
      </div>
    )
  }
}

TodoList.propTypes = {
  getTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}
