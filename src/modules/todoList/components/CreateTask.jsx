import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class CreateTask extends React.Component {
  handleInsertTask = () => {
    const { newTask, updateNewTask } = this.props

    // TODO
    if (newTask) {
      axios
        .post('task', { task: newTask })
        .then(() => {
          updateNewTask('newTask', '')
          axios
            .get('tasks', {})
            .then(response => this.props.getTasks(response.data))
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }
  }

  render() {
    const { updateNewTask, newTask } = this.props
    return (
      <div style={{ width: '100%', height: '40px' }}>
        <input
          style={{
            width: '96%',
            height: '40px',
            border: 0,
            padding: 0,
            paddingLeft: '2%',
            paddingRight: '2%',
            fontSize: '16px',
          }}
          value={newTask}
          placeholder="New Todo"
          onChange={e => updateNewTask('newTask', e.target.value)}
          onBlur={this.handleInsertTask}
          onKeyDown={e => e.which === 13 && this.handleInsertTask()}
        />
      </div>
    )
  }
}

CreateTask.propTypes = {
  updateNewTask: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
}
