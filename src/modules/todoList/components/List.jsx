import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'

import CreateTask from '../containers/CreateTask'
import Task from './Task'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { select: 'TODO' }
  }

  componentDidMount() {
    axios
      .get('tasks', {})
      .then(response => this.props.getTasks(response.data))
      .catch(error => console.log(error))
  }

  render() {
    const { select } = this.state
    const { tasks } = this.props
    const OPTIONS = ['TODO', 'DONE', 'DELETED']
    const filterdTasks = tasks.filter(({ isCompleted, isDeleted }) => {
      if (select === 'TODO') return !isDeleted && !isCompleted
      if (select === 'DONE') return !isDeleted && isCompleted
      return isDeleted
    })
    return (
      <ContainerDiv>
        <SelectDiv>
          {OPTIONS.map(option =>
            (<RaisedButton
              key={Math.random()}
              style={{ marginLeft: '1px' }}
              label={option}
              backgroundColor={
                select === option ? 'rgb(0, 188, 212)' : '#C0C0C0'
              }
              labelColor="#fff"
              onTouchTap={() => this.setState({ select: option })}
            />),
          )}
        </SelectDiv>
        <div style={{ border: '1px dotted #d3d3d3' }}>
          <CreateTask />
          {filterdTasks.map(item =>
            <Task item={item} key={item._id} getTasks={this.props.getTasks} />,
          )}
        </div>
      </ContainerDiv>
    )
  }
}

const ContainerDiv = styled.div`
  width: 500px;
  background-color: #fff;
  margin: 0 auto';
`

const SelectDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`

TodoList.propTypes = {
  getTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}
