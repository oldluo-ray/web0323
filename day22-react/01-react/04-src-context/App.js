import React, { Component } from 'react'
import Far from './Far'

import testContext from './context'
export default class App extends Component {
  state = {
    money: 0.5,
  }
  render() {
    return (
      <testContext.Provider value={this.state.money}>
        <div>
          <Far></Far>
        </div>
      </testContext.Provider>
    )
  }
}
