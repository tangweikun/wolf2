import React from 'react'
import PropTypes from 'prop-types'

import { PROPERTY_LABEL } from './constants'
import './list.css'
import DialogProperty from './dialog'

const getTr = properties =>
  properties.map(item =>
    (<div className="Property-list-tr" key={Math.random()}>
      {Object.entries(item).map(([key, value]) =>
        (<div className="Property-list-td" key={key}>
          {value}
        </div>),
      )}
    </div>),
  )
const getTh = () =>
  (<div className="Property-list-th">
    {Object.values(PROPERTY_LABEL).map(label =>
      (<div className="Property-list-td" key={Math.random()}>
        {label}
      </div>),
    )}
  </div>)

function PropertyList({ properties }) {
  return (
    <div className="Property-list-container">
      <DialogProperty />
      {getTh()}
      {getTr(properties)}
    </div>
  )
}

PropertyList.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PropertyList
