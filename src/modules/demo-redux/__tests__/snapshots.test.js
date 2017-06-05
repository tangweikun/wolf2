import React from 'react'
import renderer from 'react-test-renderer'

import App from '../components/index.jsx'

describe('++ Snapshot for Test', () => {
  it('should render TableRow', () => {
    const tree = renderer.create(<App />).toJSON()
    // const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
