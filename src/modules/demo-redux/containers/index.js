import { connect } from 'react-redux';
import { changeValue } from '../actions';
import Component from '../components';

const mapStateToProps = state => ({
  inputValue: state.demoRedux.inputValue,
});

export default connect(mapStateToProps, { changeValue })(Component);
