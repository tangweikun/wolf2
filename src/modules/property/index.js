import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import PropertyLineChart from './lineChart'
import { CATEGORY } from './constants'


const Property = () => (
  <Tabs>
    {
      Object.entries(CATEGORY).map(([key, { text, color }]) => (
        <Tab label={text}>
          <PropertyLineChart color={color} dataKey={key} />
        </Tab>
      ))
    }
  </Tabs>
);

export default Property
