import React, { Component } from 'react'
import List from './components/List'

export default class App extends Component {
  state = {
    list: ['a', 'b', 'c'],
  }
  render() {
    return (
      <div>
        <List></List>
      </div>
    )
  }
}
