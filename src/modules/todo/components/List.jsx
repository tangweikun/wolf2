import React from 'react'
import PropTypes from 'prop-types'

import CreateItem from '../containers/CreateItem'
import TodoItem from './Item'

export default class TodoList extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '500px',
          backgroundColor: 'gray',
          margin: '0 auto',
          border: '1px solid gray',
        }}
      >
        <CreateItem />
        <TodoItem />
      </div>
    )
  }
}

TodoList.propTypes = {
  changeValue: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
}
