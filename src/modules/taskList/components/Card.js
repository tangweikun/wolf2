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
      }}
    >
      {text}
    </div>
  )
}
