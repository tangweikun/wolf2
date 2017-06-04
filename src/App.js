import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
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
          body
        </div>
      </div>
    );
  }
}

export default App;
