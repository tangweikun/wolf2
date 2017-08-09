import { connect } from 'react-redux'
import { addCard } from '../action'
import Component from '../components/List'

const mapStateToProps = ({ board }) => ({
  list: board.list,
})

export default connect(mapStateToProps, { addCard })(Component)
