import React from 'react'
import PropTypes from 'prop-types'

export default class CreateTask extends React.Component {
  render() {
    const { changeValue, inputValue } = this.props
    return (
      <div style={{ width: '100%', height: '30px' }}>
        <input
          style={{ width: '100%', height: '30px', border: 0, padding: 0 }}
          value={inputValue}
          onChange={e => changeValue('inputValue', e.target.value)}
        />
      </div>
    )
  }
}

CreateTask.propTypes = {
  changeValue: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
}
