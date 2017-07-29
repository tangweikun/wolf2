import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Property from './modules/property'
import TodoList from './modules/todoList/components'
import App from './App'
import Comicon from './modules/comicon'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Comicon} />
    <Route path="/property" component={Property} />
    <Route path="/todo" component={TodoList} />
    <Route path="/comicon" component={Comicon} />
  </Route>
)

export default routes
