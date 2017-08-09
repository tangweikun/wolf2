import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'

import Card from './Card'

export default class List extends React.Component {
  render() {
    const { order, cards, addCard } = this.props

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
        <div style={{ height: '40px', backgroundColor: 'gray' }}>
          Todo
          <FaPlus onClick={() => addCard(order)} />
        </div>
        {cards.map(({ text }) => <Card text={text} />)}
        <Card />
        <Card />
      </div>
    )
  }
}
