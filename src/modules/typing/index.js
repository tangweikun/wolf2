import React, { Component } from 'react'
import Typing from './Typing'

export default class TypingBoard extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'yellow',
          justifyContent: 'center',
        }}
      >
        <div style={{ flexGrow: 2, flex: 'flex-grow' }}>Start</div>
        <div style={{ flex: 1 }}>
          <Typing />
        </div>
      </div>
    )
  }
}
