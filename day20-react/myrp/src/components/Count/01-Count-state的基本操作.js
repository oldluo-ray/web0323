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
        {/* 这是jsx中的注释 */}
        {/* 使用数据, this.state.xxxx  this是当前组件实例  render函数体中的this,一定指向当前组件的实例*/}
        <div style={{ color: 'red' }}>{this.state.count}</div>
        <div>{this.state.msg}</div>
        <div>{this.state.data}</div>
        <button
          className="btn"
          onClick={() => {
            // 注意: 不建议直接改数据,即便是改了,也无法更新视图
            // this.state.count++
            // console.log(this.state.count)
            // 给状态赋值:
            // 1. 修改数据 2. 更新视图
            this.setState({
              // 注意: 尽量不要直接修改原来的数据
              count: this.state.count + 1,
            })
          }}
        >
          +
        </button>
      </div>
    )
  }

  // 这个是按钮的点击事件的事件处理函数
  // fn() {
  //   // console.log('点击按钮了')
  //   console.log(this)
  // }
}
