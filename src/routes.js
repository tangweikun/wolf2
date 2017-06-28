import React from 'react'
import { Route } from 'react-router'

import Demo1 from './modules/Demo1.jsx'
import Demo2 from './modules/Demo2.jsx'
import DemoRedux from './modules/demo-redux/containers'
import App from './App'
import Minion from './modules/minion/index.jsx'


const routes = (
  <Route path="/" component={App}>
    <Route path="/about" component={Demo1}/>
    <Route path="/topics" component={Demo2}/>
    <Route path="/demo" component={DemoRedux} />
  <Route path="/minion" component={Minion} />
  </Route>
)

export default routes
