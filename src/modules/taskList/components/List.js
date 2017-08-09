import React from 'react'

import Card from './Card'

export default function List() {
  return (
    <div
      style={{
        display: 'inline-block',
        border: '1px solid gray',
        backgroundColor: 'yellow',
        minWidth: '250px',
        height: '400px',
        marginRight: '10px',
        paddingLeft: '5px',
        paddingRight: '5px',
      }}
    >
      <div style={{ height: '40px', backgroundColor: 'gray' }}>Todo</div>
      <Card />
      <Card />
    </div>
  )
}
