import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Property from './modules/property'
import TodoList from './modules/todoList/components'
import App from './App'
import Comicon from './modules/comicon'
import AboutMe from './modules/about'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={TodoList} />
    <Route path="/property" component={Property} />
    <Route path="/todo" component={TodoList} />
    <Route path="/comicon" component={Comicon} />
    <Route path="/about" component={AboutMe} />
  </Route>
)

export default routes
