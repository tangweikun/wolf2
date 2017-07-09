import React from 'react'
import { PROPERTY, PROPERTY_LABEL } from './constants'
import './list.css'

const PropertyList = () => (
  <div className='Property-list-container'>
    <div className='Property-list-th'>
      {
        Object.values(PROPERTY_LABEL).map(label => (
          <div className='Property-list-td'>
            {label}
          </div>
        ))
      }
    </div>

    {
      PROPERTY.map(item => (
        <div className='Property-list-tr'>
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
