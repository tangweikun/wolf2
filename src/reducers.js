import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import todoList from './modules/todoList/reducer'
import readingList from './modules/readingList/reducer'

const rootReducer = combineReducers({
  todoList,
  readingList,
  routing: routerReducer,
})

export default rootReducer
