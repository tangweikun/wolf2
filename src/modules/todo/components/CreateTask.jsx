import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class CreateTask extends React.Component {
  handleInsertTask = () => {
    const { newTask, changeValue } = this.props
    axios
      .post('insertTask', {
        task: newTask,
      })
      .then((response) => {
        console.log(response)
        changeValue('newTask', null)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    const { changeValue, newTask } = this.props
    return (
      <div style={{ width: '100%', height: '30px' }}>
        <input
          style={{ width: '100%', height: '30px', border: 0, padding: 0 }}
          value={newTask}
          onChange={e => changeValue('newTask', e.target.value)}
          onBlur={this.handleInsertTask}
        />
      </div>
    )
  }
}

CreateTask.propTypes = {
  changeValue: PropTypes.func.isRequired,
  newTask: PropTypes.number.isRequired,
}
