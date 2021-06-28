import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    console.log('message', this.props)
    return (
      <div>
        <div>{this.props.arr}</div>
        <button
          onClick={() => {
            // this.props.dispatch(push(5))
            this.props.push(9)
          }}
        >
          按钮-数组添加数据
        </button>
      </div>
    )
  }
}
