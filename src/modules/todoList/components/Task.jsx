import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Task({ text }) {
  return (
    <ContainerDiv>
      {text}
    </ContainerDiv>
  )
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
}

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8ff;
  border-top: 1px dotted #d3d3d3;
  padding: 10px;
`
