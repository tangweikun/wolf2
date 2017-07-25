import React from 'react'
import PropTypes from 'prop-types'

export default function App({ changeValue, inputValue }) {
  return (
    <div>
      <input
        value={inputValue}
        onChange={e => changeValue('inputValue', e.target.value)}
      />
      <p>
        {inputValue}
      </p>
    </div>
  )
}

App.propTypes = {
  changeValue: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
}
