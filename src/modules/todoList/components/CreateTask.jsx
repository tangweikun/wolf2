import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import io from 'socket.io-client'

const socket = io('127.0.0.1:4000', {
  path: '/stomp',
  'force new connection': true,
  transports: ['xhr-polling', 'websocket', 'polling', 'flashsocket'],
})

export default class CreateTask extends React.Component {
  handleInsertTask = () => {
    const { newTask, updateNewTask } = this.props
    socket.emit('chat message', newTask)

    if (newTask) {
      axios
        .post('task', { task: newTask })
        .then(() => {
          updateNewTask('newTask', '')
          socket.on('chat message', (tasks) => {
            console.log(tasks, '----9999')
            this.props.getTasks(tasks)
          })
        })
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
