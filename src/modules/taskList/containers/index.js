import { connect } from 'react-redux'
import { addTask } from '../action'
import Component from '../components/index'

const mapStateToProps = ({ board }) => ({
  list: board.list,
})

export default connect(mapStateToProps, { addTask })(Component)
