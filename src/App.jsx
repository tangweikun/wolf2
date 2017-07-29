import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import Menu from 'material-ui/Menu'
import axios from 'axios'
import { browserHistory } from 'react-router'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { title: 'Keep Learning' }
  }
  componentWillMount() {
    // TODO should remove
    axios
      .get('property', {})
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const sidebarList = [
      { name: 'TodoList', path: '/todo' },
      { name: 'CSS漫展', path: '/comicon' },
      { name: '资产', path: '/property' },
    ]

    return (
      <div className="App">
        <div className="App-sidebar">
          <div className="App-sidebar-title">KeepLearning</div>
          <Menu
            onItemTouchTap={() => {
              console.log(454)
            }}
          >
            {sidebarList.map(({ name, path }) =>
              (<MenuItem
                key={name}
                onTouchTap={() => {
                  browserHistory.push(path)
                  this.setState({ title: name })
                }}
              >
                {name}
              </MenuItem>),
            )}
          </Menu>
        </div>
        <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span>
              {this.state.title}
            </span>
          </div>
          <div className="App-body">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
