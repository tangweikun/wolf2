import React from 'react'
import { PROPERTY, PROPERTY_LABEL } from './constants'
import './list.css'

const getTh = () => (
  <div className='Property-list-th'>
    {
      Object.values(PROPERTY_LABEL).map((label, index) => (
        <div className='Property-list-td' key={`${label}-${index}`}>
          {label}
        </div>
      ))
    }
  </div>
)

const getTr = () => (
  PROPERTY.map((item, i) => (
    <div className='Property-list-tr' key={`${item}-${i}`}>
      {
        Object.values(item).map((value, index) => (
          <div className='Property-list-td' key={`${value}-${index}`}>
            {value}
          </div>
        ))
      }
    </div>
  ))
)

const PropertyList = () => (
  <div className='Property-list-container'>
    { getTh() }
    { getTr() }
  </div>
)

export default PropertyList
