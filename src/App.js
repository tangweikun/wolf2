import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import Menu from 'material-ui/Menu'
import { browserHistory } from 'react-router'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-sidebar">
          <div className="App-sidebar-title">KeepLearning</div>
            <Menu onItemTouchTap={() => { console.log(454)}}>
              <MenuItem onTouchTap={() => { browserHistory.push('/about')}}>Menu Item22</MenuItem>
              <MenuItem onTouchTap={() => { browserHistory.push('/demo')}}>Menu Item 44</MenuItem>
            <MenuItem onTouchTap={() => { browserHistory.push('/minion')}}>小黄人</MenuItem>
            </Menu>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label>Keep Learning</label>
        </div>
        <div className="App-body">
            {this.props.children}
        </div>
      </div>
    )
  }
}
