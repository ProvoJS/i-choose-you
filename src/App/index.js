import React from 'react'
import { RouteHandler } from 'react-router'

var App = React.createClass({

  render: function() {
    return(
      <div style={{height: '100%'}}>
        <RouteHandler />
      </div>
    )
  }
})


export default App
