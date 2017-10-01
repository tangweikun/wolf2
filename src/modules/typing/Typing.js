import React, { Component } from 'react'
import axios from 'axios'

export default class Typing extends Component {
  state = {
    startTimers: false,
    wordsCount: 0,
    currentPosition: 0,
    completedSentence: '',
    remindingSentence:
      'currentPosition, completedSentence, remindingSentence, inputValueAa 1234567890 12345',
    inputValue: '',
  }

  getTypingSpeed = () => {
    const { startAt, endAt, wordsCount } = this.state
    return Math.round(wordsCount / (5 * ((endAt - startAt) / (1000 * 60)))) || 0
  }

  handleInsertTyping = ({ startAt, endAt, wpm }) => {
    axios
      .post('typing', {
        wpm,
        startAt,
        endAt,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleKeyDown = (keyCode, shiftKey) => {
    const {
      wordsCount,
      completedSentence,
      remindingSentence,
      inputValue,
      startTimers,
      startAt,
      endAt,
    } = this.state

    const currentKeyCode = keyCode

    if (remindingSentence[0].charCodeAt() === keyCode) {
      let nextInputValue = inputValue + String.fromCharCode(keyCode)

      if (keyCode === 32) {
        nextInputValue = ''
      }

      const variables = {
        completedSentence: `${completedSentence}${String.fromCharCode(keyCode)}`,
        remindingSentence: remindingSentence.slice(1),
        inputValue: nextInputValue,
      }

      if (!startTimers) Object.assign(variables, { startTimers: true, startAt: new Date() })
      if (remindingSentence.slice(1) === '') {
        Object.assign(variables, { isEndTyping: true })
        this.handleInsertTyping({
          startAt,
          endAt,
          wpm: Math.round((wordsCount + 1) / (5 * ((endAt - startAt) / (1000 * 60)))) || 0,
        })
      }

      this.setState({
        ...variables,
        endAt: new Date(),
        wordsCount: wordsCount + 1,
      })
    }
  }

  render() {
    const { completedSentence, remindingSentence, inputValue, endAt, startAt } = this.state

    return (
      <div>
        <div>WPM: {this.getTypingSpeed()}</div>
        <div>
          <span style={{ color: 'green', fontSize: 36 }}>{completedSentence}</span>
          <span style={{ fontSize: 40 }}>{remindingSentence}</span>
        </div>
        {remindingSentence && (
          <input
            id="typing"
            shiftKey={false}
            type="text"
            value={inputValue}
            onKeyPress={e => this.handleKeyDown(e.which, e.shiftKey)}
          />
        )}
        {!remindingSentence && <div>{endAt - startAt}</div>}
      </div>
    )
  }
}
