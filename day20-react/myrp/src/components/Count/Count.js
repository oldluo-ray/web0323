import React from 'react'
import './Count.css'

export default class Count extends React.Component {
  // 利用es7中类的新的语法,直接将state添加到实例上
  state = { count: 0, msg: 'haha', data: [1, 2, 3] }

  render() {
    return (
      <div>
        <div style={{ color: 'red' }}>{this.state.count}</div>
        <div>{this.state.msg}</div>
        <div>{this.state.data}</div>
        <button className="btn" onClick={this.fn}>
          +
        </button>
      </div>
    )
  }

  // 按钮点击事件的事件处理函数
  fn = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
}
