import React, { Component } from 'react'

export default class Test extends Component {
  //1. 创建ref对象
  testRef = React.createRef()
  render() {
    return (
      <div>
        {/* 2. 绑定ref对象和虚拟dom */}
        <input type="text" ref={this.testRef} />
        <button
          onClick={() => {
            console.log(this.testRef.current.value)
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
