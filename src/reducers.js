import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import demoRedux from './modules/demo-redux/reducers'

const rootReducer = combineReducers({
  demoRedux,
  routing: routerReducer,
})

export default rootReducer
