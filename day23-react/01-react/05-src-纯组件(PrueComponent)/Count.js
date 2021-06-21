import React, { Component } from 'react'
import Test from './Test'
export default class Count extends Component {
  state = {
    count: 0,
  }
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
  }
  render() {
    console.log('count-render执行了')
    return (
      <>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.getRandomIntInclusive(1, 3),
            })
          }}
        >
          按钮
        </button>
        <Test count={this.state.count}></Test>
      </>
    )
  }
}
