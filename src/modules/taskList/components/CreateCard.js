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
      <div style={{ width: '100%', height: '50px' }}>
        <textarea
          style={{
            display: 'block',
            width: '96%',
            height: '50px',
            border: 0,
            padding: 0,
            paddingLeft: '2%',
            paddingRight: '2%',
            fontSize: '18px',
          }}
          value={text}
          placeholder="Please leave your advice on this site"
          onChange={e => this.setState({ text: e.target.value })}
        />
        <RaisedButton
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
