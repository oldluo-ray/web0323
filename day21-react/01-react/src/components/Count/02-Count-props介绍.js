import React from 'react'
import './Count.css'

export default class Count extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  // 利用es7中类的新的语法,直接将state添加到实例上
  state = { count: 0, msg: 'haha', data: [1, 2, 3] }

  render() {
    // console.log(this.props) // 用来接收组件外部数据的
    // 注意点:
    // 1. props是只读的,不能改.但是react底层检查的时候,是浅层对比
    // this.props.num = 1
    // this.props.obj.name = 'ls'
    // 2. props可以接收任何类型的数据
    // 3. 构造器中无法直接通过this.props获取传递进来的数据,需要在构造器上接收,并且传递到super中,才能通this.props获取到

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
        <div>{this.props.obj.name}</div>
      </div>
    )
  }

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
  }
}

// 注意:函数组件中没有this,所以无法获取到实例对象.接收props是通过形参接收
// export default function Count(props) {
//   return <div>{props.num}</div>
// }
