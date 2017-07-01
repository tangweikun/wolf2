import React, { Component } from 'react'

import List from './list'

export default class App extends Component {
  render() {
    const { changeValue, inputValue } = this.props

    return (
      <div>
        <List />
        <input
          value={inputValue}
          onChange={({ target }) => changeValue('inputValue', target.value)}
        />
        <p>{inputValue}</p>
      </div>
    )
  }
}
