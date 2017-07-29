import React from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', backgroundColor: 'red', height: '50px' }}>
        66
      </div>
    )
  }
}

TodoItem.propTypes = {
  changeValue: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
}
