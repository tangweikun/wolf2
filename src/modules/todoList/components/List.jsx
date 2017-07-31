import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'

import CreateTask from '../containers/CreateTask'
import Task from './Task'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { select: 'TODO' }
  }

  componentDidMount() {
    axios
      .get('tasks', {})
      .then(response => this.props.getTasks(response.data))
      .catch(error => console.log(error))
  }

  render() {
    const { select } = this.state
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
            backgroundColor={select === 'TODO' ? 'rgb(0, 188, 212)' : '#C0C0C0'}
            labelColor="#fff"
            onTouchTap={() => this.setState({ select: 'TODO' })}
          />
          <RaisedButton
            style={{ marginLeft: '1px' }}
            label="DONE"
            backgroundColor={select === 'DONE' ? 'rgb(0, 188, 212)' : '#C0C0C0'}
            labelColor="#fff"
            onTouchTap={() => this.setState({ select: 'DONE' })}
          />
          <RaisedButton
            style={{ marginLeft: '1px' }}
            label="DELETED"
            backgroundColor={
              select === 'DELETED' ? 'rgb(0, 188, 212)' : '#C0C0C0'
            }
            labelColor="#fff"
            onTouchTap={() => this.setState({ select: 'DELETED' })}
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
