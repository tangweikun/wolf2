import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import Menu from 'material-ui/Menu'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'

import logo from './logo.svg'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { title: 'TodoList' }
  }

  render() {
    const sidebarList = [
      { name: 'TodoList', path: '/todo' },
      { name: 'TaskList', path: '/taskList' },
    ]

    return (
      <div className="App">
        <div className="App-sidebar">
          <div className="App-sidebar-title">KeepLearning</div>
          <Menu>
            {sidebarList.map(({ name, path }) =>
              <MenuItem
                key={name}
                style={{ color: '#fff', width: '200px' }}
                onTouchTap={() => {
                  browserHistory.push(path)
                  this.setState({ title: name })
                }}
              >
                {name}
              </MenuItem>,
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

App.propTypes = {
  children: PropTypes.element.isRequired,
}
