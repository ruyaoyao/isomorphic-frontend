import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

import Header from '.'

beforeEach(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

it('should create a Header component', () => {
  const component = shallow(<Header />)
  expect(component.find('header')).toHaveLength(1)
})