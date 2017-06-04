import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css';

const AppWrapWithMaterialUI = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <App />
  </MuiThemeProvider>
);

injectTapEventPlugin()
ReactDOM.render(<AppWrapWithMaterialUI />, document.getElementById('root'))
registerServiceWorker()
