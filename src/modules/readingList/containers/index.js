import { connect } from 'react-redux'
import { changeValue } from '../action'
import Component from '../components/index.jsx'

const mapStateToProps = ({ readingList }) => ({
  inputValue: readingList.inputValue,
})

export default connect(mapStateToProps, { changeValue })(Component)
