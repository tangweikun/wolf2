import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'

export default class CreateTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  handleInsertTask = () => {
    // const { newTask, updateNewTask } = this.props
    // TODO
    // if (newTask) {
    //   axios
    //     .post('task', { task: newTask })
    //     .then(() => {
    //       updateNewTask('newTask', '')
    //       axios
    //         .get('tasks', {})
    //         .then(response => this.props.getTasks(response.data))
    //         .catch(error => console.log(error))
    //     })
    //     .catch(error => console.log(error))
    // }
  }

  render() {
    const { addCard, order } = this.props
    const { text } = this.state

    return (
      <div
        style={{
          width: '100%',
          height: '50px',
        }}
      >
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
        <RaisedButton label="ADD" onTouchTap={() => addCard({ order, text })} />
      </div>
    )
  }
}

CreateTask.propTypes = {
  addCard: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
}
