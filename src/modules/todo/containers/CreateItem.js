import { connect } from 'react-redux'
import { changeValue } from '../actions'
import Component from '../components/CreateItem'

const mapStateToProps = state => ({
  inputValue: state.todoList.inputValue,
})

export default connect(mapStateToProps, { changeValue })(Component)
