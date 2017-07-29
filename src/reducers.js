import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import demoRedux from './modules/todo/reducers'
import readingList from './modules/readingList/reducer'

const rootReducer = combineReducers({
  demoRedux,
  readingList,
  routing: routerReducer,
})

export default rootReducer
