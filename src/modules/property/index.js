import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import PropertyLineChart from './lineChart'
import { CATEGORY } from './constants'
import PropertyList from './list'


const Property = () => (
  <Tabs>
    <Tab label="资产列表">
      <PropertyList />
    </Tab>
    {
      Object.entries(CATEGORY).map(([key, { text, color }]) => (
        <Tab label={text} key={key}>
          <PropertyLineChart color={color} dataKey={key} />
        </Tab>
      ))
    }
  </Tabs>
);

export default Property
