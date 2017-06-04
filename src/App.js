import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import { Route } from 'react-router'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import MenuItem from 'material-ui/MenuItem'

import configureStore from './configureStore'
import Demo1 from './modules/Demo1.jsx'
import Demo2 from './modules/Demo2.jsx'
import logo from './logo.svg';
import './App.css';
import DemoRedux from './modules/demo-redux/containers'

const store = configureStore()

const history = createHistory()


const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <ConnectedRouter history={history}>
        <div className="App">
          <div className="App-sidebar">
            <div className="App-sidebar-title">KeepLearning</div>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <label>Keep Learning</label>
          </div>
          <div className="App-body">
            <div>
              <Route path="/about" component={Demo1}/>
              <Route path="/topics" component={Demo2}/>
              <Route path="/demo" component={DemoRedux} />
            </div>
          </div>
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
);

export default App;
