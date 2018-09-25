import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

import IndexPage from '..'
import App from '../../components/App'

beforeEach(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

it('should include an App instance', () => {
  const component = shallow(<IndexPage />)
  expect(component.find(App)).toHaveLength(1)
})