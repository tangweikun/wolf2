import React from 'react'
import { PROPERTY, PROPERTY_LABEL } from './constants'
import './index.css'

const PropertyList = () => (
  <div className='Property-list-container'>
    {
      Object.values(PROPERTY_LABEL).map(label => (
        <div className='Property-list-td'>
          {label}
        </div>
      ))
    }
    {
      PROPERTY.map(item => (
        <div>
          {
            Object.values(item).map(value => (
              <div className='Property-list-td'>
                {value}
              </div>
            ))
          }
        </div>
      ))
    }
  </div>
)

export default PropertyList
