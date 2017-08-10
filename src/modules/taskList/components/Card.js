import React from 'react'

export default function Card({ text }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        marginLeft: '5px',
        marginRight: '5px',
        fontSize: '18px',
        marginTop: '5px',
        paddingBottom: '5px',
        paddingTop: '5px',
        paddingLeft: '5px',
        paddingRight: '5px',
        borderRadius: '2px',
        border: '1px solid rgba(0, 0, 0, .23)',
      }}
    >
      {text}
    </div>
  )
}
