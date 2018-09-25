import React from 'react'
import Link from 'next/link'

import { Navigator } from './Styled'

const NavigatorComponent = () => (
  <Navigator>
    <Link href="/auth">
      <a>Login</a>
    </Link>
  </Navigator>
)

export default NavigatorComponent