import { connect } from 'react-redux'
import { getTasks } from '../actions'
import Component from '../components/List'

const mapStateToProps = ({ todoList }) => ({
  tasks: todoList.tasks,
})

export default connect(mapStateToProps, { getTasks })(Component)
