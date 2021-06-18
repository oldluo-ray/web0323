import React from 'react'
import './Count.css'

export default class Count extends React.Component {
  // 利用es7中类的新的语法,直接将state添加到实例上
  state = { msg: 'haha', data: [1, 2, 3] }

  render() {
    // console.log(this.props.getProps)
    return (
      <div>
        <div style={{ color: 'red' }} id="box">
          {this.props.count}
        </div>
        <div>{this.state.msg}</div>
        <div>{this.state.data}</div>
        <button className="btn" onClick={this.fn}>
          +
        </button>
      </div>
    )
  }

  // fn = () => {
  //   this.setState(
  //     {
  //       count: this.state.count + 1,
  //     },
  //     () => {
  //       // 第二个参数是一个回调函数,当数据修改完毕,并且视图更新完毕,才会调用
  //       console.log(this.state)
  //       console.log(document.getElementById('box'))
  //     }
  //   )
  // }
}

// 注意:函数组件中没有this,所以无法获取到实例对象.接收props是通过形参接收
// export default function Count(props) {
//   return <div>{props.num}</div>
// }
