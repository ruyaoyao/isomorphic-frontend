import React from 'react'

import { Header, Clear } from './Styled'
import Logo from '../Logo'
import Navigator from '../Navigator'

const HeaderComponent = () => (
  <Header>
    <Logo />
    <Navigator />
    <Clear />
  </Header>
)

export default HeaderComponent