import React from 'react'
import PropTypes from 'prop-types'

import TodoList from './List'

export default function App({ changeValue, inputValue }) {
  return (
    <div style={{ padding: '50px' }}>
      <TodoList />
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
