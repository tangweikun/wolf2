import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Checkbox from 'material-ui/Checkbox'

export default function Task({ text }) {
  return (
    <ContainerDiv>
      <Checkbox label={text} style={{ width: '75%' }} />
    </ContainerDiv>
  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
}

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px dotted #d3d3d3;
  padding: 10px;
`
