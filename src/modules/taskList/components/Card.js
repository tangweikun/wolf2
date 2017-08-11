import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Card({ text }) {
  return (
    <CardDiv>
      {text}
    </CardDiv>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
}

const CardDiv = styled.div`
  background-color: #fff;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 18px;
  margin-top: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 4px;
  min-height: 30px;
  white-space: normal;
  border: 1px solid rgba(0, 0, 0, .23);
`
