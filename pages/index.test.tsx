import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

import App from '.'

beforeEach(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

it('should create a App component', () => {
  const component = shallow(<App />)
  expect(component.find('#app')).toHaveLength(1)
})