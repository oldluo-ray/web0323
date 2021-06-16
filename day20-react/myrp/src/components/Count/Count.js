import React from 'react'
import './Count.css'

export default class Count extends React.Component {
  constructor() {
    super()
    // 定义状态(数据)
    // state属性名是固定的
    // 值必须是一个对象. 对象里面才是我们要操作的数据
    // constructor中的this,一定指向当前组件的实例
    this.state = {
      count: 0,
      msg: 'haha',
      data: [1, 2, 3],
    }
  }

  render() {
    return (
      <div>
        <div style={{ color: 'red' }}>{this.state.count}</div>
        <div>{this.state.msg}</div>
        <div>{this.state.data}</div>
        <button
          className="btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            })
          }}
        >
          +
        </button>
      </div>
    )
  }
}
