import React from 'react'
import PropTypes from 'prop-types'

import CreateTask from '../containers/CreateTask'
import Task from './Task'

export default class TodoList extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '500px',
          backgroundColor: 'gray',
          margin: '0 auto',
          border: '1px solid gray',
        }}
      >
        <CreateTask />
        <Task />
      </div>
    )
  }
}

TodoList.propTypes = {
  changeValue: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
}
