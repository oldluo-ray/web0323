import React from 'react'
import './Count.css'

export default class Count extends React.Component {
  // 利用es7中类的新的语法,直接将state添加到实例上
  state = { count: 0, msg: 'haha', data: [1, 2, 3] }

  render() {
    return (
      <div>
        <div style={{ color: 'red' }} id="box">
          {this.state.count}
        </div>
        <div>{this.state.msg}</div>
        <div>{this.state.data}</div>
        <button className="btn" onClick={this.fn}>
          +
        </button>
      </div>
    )
  }

  // 按钮点击事件的事件处理函数
  // fn = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   })
  //   // 在这里setState是异步操作.所以调用完setState之后,立刻获取状态的值,还是原来的结果
  //   console.log(this.state.count)
  // }
  // fn = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //     msg: '123',
  //   })
  //   this.setState({
  //     count: this.state.count + 2,
  //   })
  //   this.setState({
  //     count: this.state.count + 3,
  //   })
  //   // 相同属性会覆盖,不同属性会合并
  //   // this.setState({
  //   //   count: this.state.count + 3,
  //   //   msg: '123',
  //   // })
  // }
  // fn = () => {
  //   // 当state的状态被修改完毕之后,回调函数才被调用 state可以接收到最新的值
  //   this.setState((state) => {
  //     return {
  //       count: state.count + 1,
  //     }
  //   })
  //   this.setState((state) => {
  //     return {
  //       count: state.count + 2,
  //     }
  //   })
  //   this.setState((state) => {
  //     return {
  //       count: state.count + 3,
  //     }
  //   })
  // }

  fn = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        // 第二个参数是一个回调函数,当数据修改完毕,并且视图更新完毕,才会调用
        console.log(this.state)
        console.log(document.getElementById('box'))
      }
    )
    // 在这里setState是异步操作.所以调用完setState之后,立刻获取状态的值,还是原来的结果
    console.log(this.state.count)
  }
}
