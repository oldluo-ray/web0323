import React, { Component } from 'react'

import Far from './Far'
import Bank from './Bank'
export default class App extends Component {
  state = {
    money: 0.5,
  }

  render() {
    return (
      <div>
        <Far></Far>
        <Bank></Bank>
      </div>
    )
  }
}
