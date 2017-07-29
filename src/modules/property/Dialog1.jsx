import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import axios from 'axios'

export default class DialogProperty extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false, income: null, outlay: null, date: null }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleChange = (event, date) => {
    this.setState({ date })
  }

  handleChangeText = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleInsertProperty = () => {
    this.handleClose()
    const { date, income, outlay } = this.state
    axios
      .post('property', {
        date,
        income,
        outlay,
      })
      .then((response) => {
        console.log(response)
        this.setState({
          date: null,
          income: null,
          outlay: null,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const actions = [
      <FlatButton
        label="确定"
        primary
        keyboardFocused
        onTouchTap={this.handleInsertProperty}
      />,
    ]
    const { open, income, date, outlay } = this.state

    return (
      <div>
        <RaisedButton label="新增" onTouchTap={this.handleOpen} />
        <Dialog
          title="新增一条资产记录"
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="月收入"
            name="income"
            value={income}
            onChange={this.handleChangeText}
          />
          <br />
          <TextField
            hintText="月支出"
            name="outlay"
            value={outlay}
            onChange={this.handleChangeText}
          />
          <DatePicker hintText="日期" onChange={this.handleChange} value={date} />
        </Dialog>
      </div>
    )
  }
}
