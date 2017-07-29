import { connect } from 'react-redux'
import { changeValue } from '../actions'
import Component from '../components/CreateTask'

const mapStateToProps = state => ({
  newTask: state.todoList.newTask,
})

export default connect(mapStateToProps, { changeValue })(Component)
