import React from 'react'

import Header from '../Header'

const AppComponent = (props) => {
  return (
    <div id="app">
      <Header />
      {props.children}
    </div>
  )
}

export default AppComponent