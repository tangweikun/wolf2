import React from 'react'
import { Route } from 'react-router'

import ReadingList from './modules/readingList/containers'
import Property from './modules/property'
import TodoList from './modules/todoList/components'
import App from './App'
import Minion from './modules/minion'
import Comicon from './modules/comicon'

const routes = (
  <Route path="/" component={App}>
    <Route path="/about" component={ReadingList} />
    <Route path="/property" component={Property} />
    <Route path="/demo" component={TodoList} />
    <Route path="/minion" component={Minion} />
    <Route path="/comicon" component={Comicon} />
  </Route>
)

export default routes
