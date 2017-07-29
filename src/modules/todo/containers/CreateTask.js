import { connect } from 'react-redux'
import { changeValue } from '../actions'
import Component from '../components/CreateTask'

const mapStateToProps = state => ({
  inputValue: state.todoList.inputValue,
})

export default connect(mapStateToProps, { changeValue })(Component)
