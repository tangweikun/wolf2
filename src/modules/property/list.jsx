import React from 'react'
import axios from 'axios'
import moment from 'moment'

import { PROPERTY_LABEL } from './constants'
import './list.css'
import DialogProperty from './dialog'

export default class PropertyList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { properties: null }
  }

  componentDidMount() {
    axios
      .get('findProperty', {})
      .then(response => this.setState({ properties: response.data }))
      .catch((error) => {
        console.log(error)
      })
  }

  getProperties = () =>
    this.state.properties.map(({ date, income, outlay }) => ({
      date: moment(date).format('YYYY/MM/DD'),
      totalAssets: 10000,
      netIncome: income - outlay,
      income,
      outlay,
    }))

  getTr = () =>
    this.getProperties().map(item =>
      (<div className="Property-list-tr" key={Math.random()}>
        {Object.entries(item).map(([key, value]) =>
          (<div className="Property-list-td" key={key}>
            {value}
          </div>),
        )}
      </div>),
    )

  getTh = () =>
    (<div className="Property-list-th">
      {Object.values(PROPERTY_LABEL).map(label =>
        (<div className="Property-list-td" key={Math.random()}>
          {label}
        </div>),
      )}
    </div>)

  render() {
    if (!this.state.properties) return null

    return (
      <div className="Property-list-container">
        <DialogProperty />
        {this.getTh()}
        {this.getTr()}
      </div>
    )
  }
}
