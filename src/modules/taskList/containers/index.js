import { connect } from 'react-redux'
import { addTask } from '../action'
import Component from '../components/index'

const mapStateToProps = ({ taskList }) => ({
  tasks: taskList.tasks,
})

export default connect(mapStateToProps, { addTask })(Component)
