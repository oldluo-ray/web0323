import React, { Component } from 'react'
import axios from 'axios'

export default class Message extends Component {
  render() {
    console.log('message', this.props)
    return (
      <div>
        <div>{this.props.arr}</div>
        <button
          onClick={() => {
            // this.props.dispatch(push(5))
            // this.props.push(9)

            //使用redux-thunk发送异步请求,将数据存储到redux中
            // 调用pushAsync.redux-thunk就找到对应的pushAsync,然后通过这个函数,找到里面return的那个函数,并且执行里面return的函数
            this.props.pushAsync()
          }}
        >
          按钮-数组添加数据
        </button>
      </div>
    )
  }
}
