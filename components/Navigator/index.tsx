import * as React from 'react'
import Link from 'next/link'

const HeaderComponent = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/auth">
      <a>Login</a>
    </Link>
  </div>
)

export default HeaderComponent