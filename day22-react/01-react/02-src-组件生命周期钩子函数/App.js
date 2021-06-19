import React, { Component } from 'react'
import Test from './Test'
export default class App extends Component {
  state = {
    num: 1,
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              num: 0,
            })
          }}
        >
          卸载Test按钮
        </button>
        {this.state.num === 1 && <Test></Test>}
      </div>
    )
  }
}
