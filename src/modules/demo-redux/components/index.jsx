import React, { Component } from 'react'

export default class App extends Component {
	render() {
		const { changeValue, inputValue } = this.props
		return (
      <div>
        <input value={inputValue} onChange={(e) => changeValue('inputValue', e.target.value)} />
        <p>{inputValue}</p>
      </div>
		)
	}
}
