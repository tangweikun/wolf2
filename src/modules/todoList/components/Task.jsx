import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'
import Checkbox from 'material-ui/Checkbox'

export default class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCompleted: this.props.item.isCompleted,
    }
  }

  render() {
    const { item } = this.props
    const { task, _id } = item
    const { isCompleted } = this.state
    return (
      <ContainerDiv>
        <Checkbox
          label={task}
          style={{ width: '75%' }}
          checked={isCompleted}
          onCheck={() => {
            axios.post('task/update', { _id, isCompleted: !isCompleted })
            this.setState({ isCompleted: !isCompleted })
          }}
        />
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            axios
              .post('delete', { _id })
              .then(() => {
                axios
                  .get('tasks', {})
                  .then(response => this.props.getTasks(response.data))
                  .catch(error => console.log(error))
              })
              .catch(error => console.log(error))
          }}
        >
          X
        </div>
      </ContainerDiv>
    )
  }
}

Task.propTypes = {
  item: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px dotted #d3d3d3;
  padding: 10px;
`
