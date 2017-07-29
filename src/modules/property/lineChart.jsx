import React from 'react'
import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

const innerWidth = window.innerWidth

const PropertyLineChart = ({ color, dataKey, properties }) =>
  (<LineChart
    width={innerWidth * 0.75}
    height={600}
    data={properties}
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
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PropertyLineChart
