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
      </ContainerDiv>
    )
  }
}

Task.propTypes = {
  item: PropTypes.object.isRequired,
  isCompleted: PropTypes.bool.isRequired,
}

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px dotted #d3d3d3;
  padding: 10px;
`
