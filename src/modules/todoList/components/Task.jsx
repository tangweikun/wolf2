import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'
import Checkbox from 'material-ui/Checkbox'
import FaTrashO from 'react-icons/lib/fa/trash-o'

export default class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCompleted: this.props.item.isCompleted,
    }
  }

  render() {
    const { item } = this.props
    const { task, _id, isDeleted } = item
    const { isCompleted } = this.state

    return (
      <ContainerDiv isDeleted={isDeleted}>
        <Checkbox
          disabled={isDeleted}
          label={task}
          style={{ width: '90%' }}
          checked={isCompleted}
          onCheck={() => {
            axios
              .post('task/update', { _id, isCompleted: !isCompleted })
              .then(() => {
                axios
                  .get('tasks')
                  .then(response => this.props.getTasks(response.data))
                  .catch(error => console.log(error))
              })
              .catch(error => console.log(error))

            this.setState({ isCompleted: !isCompleted })
          }}
        />
        <div style={{ cursor: 'pointer' }}>
          {!isDeleted &&
            <FaTrashO
              color="#C0C0C0"
              size={20}
              onClick={() => {
                axios
                  .post('task/delete', { _id })
                  .then(() => {
                    axios
                      .get('tasks')
                      .then(response => this.props.getTasks(response.data))
                      .catch(error => console.log(error))
                  })
                  .catch(error => console.log(error))
              }}
            />}
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
