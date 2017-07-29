import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class CreateTask extends React.Component {
  handleInsertTask = () => {
    const { newTask, updateNewTask } = this.props

    if (newTask) {
      axios
        .post('task', { task: newTask })
        .then(() => updateNewTask('newTask', ''))
        .catch(error => console.log(error))
    }
  }

  render() {
    const { updateNewTask, newTask } = this.props
    return (
      <div style={{ width: '100%', height: '30px' }}>
        <input
          style={{ width: '100%', height: '30px', border: 0, padding: 0 }}
          value={newTask}
          onChange={e => updateNewTask('newTask', e.target.value)}
          onBlur={this.handleInsertTask}
        />
      </div>
    )
  }
}

CreateTask.propTypes = {
  updateNewTask: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
}
