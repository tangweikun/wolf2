import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FaPlus from 'react-icons/lib/fa/plus'
import Card from './Card'

export default function TaskList() {
  return (
    <div
      style={{
        padding: '50px',
        display: 'flex',
        border: '1px solid red',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <div
        style={{
          border: '1px dotted gray',
          backgroundColor: 'yellow',
          minWidth: '250px',
          height: '100px',
          lineHeight: '100px',
          display: 'inline-block',
          marginRight: '20px',
          textAlign: 'center',
          flexWrap: 'nowrap',
          overflowX: 'auto',
        }}
      >
        <FaPlus />Add a list...
      </div>
    </div>
  )
}
