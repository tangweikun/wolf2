import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'

export default class CreateTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  handleInsertTask = () => {
    const { saveNewCard } = this.props
    const { text } = this.state

    saveNewCard(text)
    this.setState({ text: '' })
  }

  render() {
    const { text } = this.state

    return (
      <div
        style={{
          marginLeft: '5px',
          marginRight: '5px',
          marginTop: '5px',
        }}
      >
        <textarea
          style={{
            display: 'block',
            width: '100%',
            height: '50px',
            border: 0,
            padding: 0,
            fontSize: '18px',
            marginBottom: '5px',
          }}
          value={text}
          placeholder="Enter a note"
          onChange={e => this.setState({ text: e.target.value })}
        />

        <RaisedButton
          primary
          label="ADD"
          style={{ display: 'block' }}
          onTouchTap={this.handleInsertTask}
        />
      </div>
    )
  }
}

CreateTask.propTypes = {
  saveNewCard: PropTypes.func.isRequired,
}
