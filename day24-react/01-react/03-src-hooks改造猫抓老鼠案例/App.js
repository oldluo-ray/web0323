import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        <Cat></Cat>
        <Mouse></Mouse>
      </div>
    )
  }
}
