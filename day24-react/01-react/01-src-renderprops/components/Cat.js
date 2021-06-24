import React, { Component } from 'react'
// 导出的就是webpack编译之后的文件所处的路径
import CatUrl from '../assets/cat.gif'
console.log(CatUrl)

export default class Cat extends Component {
  render() {
    let { x, y } = this.props.data
    x += 200
    y -= 50
    return (
      <div>
        <img
          // 注意: 在react脚手架中,不要直接写相对路径. 因为我们的代码都是会被webpack编译的.编译之后的文件路径和源代码中的文件路径是不同的.
          src={CatUrl}
          alt=""
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    )
  }
}
