import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'
import PropTypes from 'prop-types'

import Card from './Card'
import CreateCard from './CreateCard'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showCreateCard: false }
  }

  saveNewCard = text => {
    const { order, addCard } = this.props

    addCard({ order, text })
    this.setState({ showCreateCard: false })
  }

  render() {
    const { showCreateCard } = this.state
    const { cards, subtitle } = this.props

    return (
      <div
        style={{
          display: 'inline-block',
          border: '1px solid gray',
          backgroundColor: '#d8e0f3',
          minWidth: '250px',
          height: '400px',
          marginRight: '10px',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            height: '40px',
            lineHeight: '40px',
            paddingLeft: '5px',
            paddingRight: '5px',
            borderBottom: '1px solid gray',
          }}
        >
          {subtitle}
          {!showCreateCard &&
            <FaPlus
              onClick={() =>
                this.setState({
                  showCreateCard: true,
                })}
            />}
        </div>
        {showCreateCard && <CreateCard saveNewCard={this.saveNewCard} />}

        {cards.map(({ text }) => <Card text={text} />)}
      </div>
    )
  }
}

List.propTypes = {
  addCard: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
}
