import React from 'react'
import PropTypes from 'prop-types'

export default class CreateTask extends React.Component {
  render() {
    const { changeValue, newTask } = this.props
    return (
      <div style={{ width: '100%', height: '30px' }}>
        <input
          style={{ width: '100%', height: '30px', border: 0, padding: 0 }}
          value={newTask}
          onChange={e => changeValue('newTask', e.target.value)}
        />
      </div>
    )
  }
}

CreateTask.propTypes = {
  changeValue: PropTypes.func.isRequired,
  newTask: PropTypes.number.isRequired,
}
