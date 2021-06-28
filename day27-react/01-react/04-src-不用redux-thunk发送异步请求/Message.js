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
            // 需求:点击按钮,给服务器发送请求,请求完成之后,将请求回来的数据,添加到redux中 redux==>state {count:0,arr:[1,2,3]}
            axios({
              method: 'get',
              url: 'http://127.0.0.1:5000/test',
            }).then((data) => {
              // console.log(data.data)
              console.log(data)
              this.props.push(data.data)
            })
          }}
        >
          按钮-数组添加数据
        </button>
      </div>
    )
  }
}
