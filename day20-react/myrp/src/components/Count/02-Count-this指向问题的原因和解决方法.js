import React from 'react'
import './Count.css'

export default class Count extends React.Component {
  // constructor() {
  //   super()
  //   // 定义状态(数据)
  //   // state属性名是固定的
  //   // 值必须是一个对象. 对象里面才是我们要操作的数据
  //   // constructor中的this,一定指向当前组件的实例
  //   this.state = {
  //     count: 0,
  //     msg: 'haha',
  //     data: [1, 2, 3],
  //   }
  //   // 解决事件处理函数中this指向问题的第二种方案: 给实例添加函数,函数的this绑定为当前组件实例
  //   // this.fn = this.fn.bind(this)
  // }
  // 利用es7中类的新的语法,直接将state添加到实例上
  state = { count: 0, msg: 'haha', data: [1, 2, 3] }

  render() {
    return (
      <div>
        <div style={{ color: 'red' }}>{this.state.count}</div>
        <div>{this.state.msg}</div>
        <div>{this.state.data}</div>
        {/* 如果这样写事件处理函数.这个事件处理函数,其实不是真实dom的那个事件处理函数.这里的事件处理函数,在底层,相当于是普通函数调用.意味着this应该指向window.但是代码被babel编译过了,执行是在严格模式下执行,所以就指向了undefined*/}
        {/* <button className="btn" onClick={this.fn}> */}
        {/* 解决方法1: 箭头函数调用法 */}
        {/* <button
          className="btn"
          onClick={() => {
            this.fn() // 对象方法调用, 函数体里的this,指向对象
          }}
        > */}
        <button className="btn" onClick={this.fn}>
          +
        </button>
      </div>
    )
  }

  // fn() {}   在类中这样定义就是将函数,添加到原型上
  // 下面这种定义函数的方式,是把函数,直接就加到了实例上. 底层调用时,必须找到实例,才能调用这个方法.底层是对象方法调用
  fn = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
}
