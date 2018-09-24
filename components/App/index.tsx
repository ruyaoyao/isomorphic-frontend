import * as React from 'react'

const AppComponent = (props) => {
  return (
    <div id="app">
      {props.children}
    </div>
  )
}

export default AppComponent