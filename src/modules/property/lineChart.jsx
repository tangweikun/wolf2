import React, { PropTypes } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

import { PROPERTY } from './constants'

const innerWidth = window.innerWidth

const PropertyLineChart = ({ color, dataKey }) =>
  (<LineChart
    width={innerWidth * 0.75}
    height={600}
    data={PROPERTY}
    margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
  >
    <XAxis dataKey="date" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey={dataKey} stroke={color} />
  </LineChart>)

PropertyLineChart.propTypes = {
  color: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
}

export default PropertyLineChart
