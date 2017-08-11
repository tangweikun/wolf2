import React from 'react'
import FaPlus from 'react-icons/lib/fa/plus'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
      <Container>
        <Header>
          <div>
            {subtitle}
          </div>
          {!showCreateCard &&
            <FaPlus onClick={() => this.setState({ showCreateCard: true })} />}
        </Header>

        {showCreateCard && <CreateCard saveNewCard={this.saveNewCard} />}

        {cards.map(({ text }) => <Card text={text} />)}
      </Container>
    )
  }
}

List.propTypes = {
  addCard: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const Container = styled.div`
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, .23);
  background-color: #d8e0f3;
  min-width: 250px;
  width: 250px;
  height: 400px;
  margin-right: 10px;
  border-radius: 8px;
`

const Header = styled.div`
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, .23);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
