import React from 'react'
import PropTypes from 'prop-types'

export default class CreateItem extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '50px' }}>
        <input style={{ width: '100%', height: '30px', border: 0 }} />
      </div>
    )
  }
}

CreateItem.propTypes = {
  changeValue: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
}
