import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import { Router, browserHistory } from 'react-router'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import routes from './routes'
import './index.css'
import './apiConfig'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

injectTapEventPlugin()
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
