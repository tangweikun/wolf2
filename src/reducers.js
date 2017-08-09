import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import todoList from './modules/todoList/reducer'
import readingList from './modules/readingList/reducer'
import taskList from './modules/taskList/reducer'

const rootReducer = combineReducers({
  todoList,
  readingList,
  taskList,
  routing: routerReducer,
})

export default rootReducer
