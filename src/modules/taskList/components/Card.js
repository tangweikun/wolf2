import React from 'react'

export default function Card({ text }) {
  return (
    <div
      style={{
        backgroundColor: 'pink',
        width: '100%',
        fontSize: '18px',
        marginTop: '5px',
        paddingBottom: '5px',
        paddingTop: '5px',
      }}
    >
      {text}
    </div>
  )
}
