import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'

import Card from './Card'
import CreateCard from './CreateCard'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showCreateCard: false }
  }

  render() {
    const { order, cards, addCard } = this.props
    const { showCreateCard } = this.state

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
          {!showCreateCard &&
            <FaPlus
              onClick={() =>
                this.setState({
                  showCreateCard: true,
                })}
            />}
        </div>
        {showCreateCard && <CreateCard addCard={addCard} order={order} />}

        {cards.map(({ text }) => <Card text={text} />)}
      </div>
    )
  }
}
