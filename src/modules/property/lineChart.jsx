import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

import { PROPERTY } from './constants';

const PropertyLineChart = ({ color, dataKey }) => (
  <LineChart
    width={1200}
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
  </LineChart>
);

export default PropertyLineChart;
