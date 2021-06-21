import React, { Component, PureComponent } from 'react'

export default class Test extends PureComponent {
  state = {
    msg: '呵呵',
    obj: {
      name: 'zs',
    },
  }

  render() {
    console.log('test-render执行了')
    return (
      <>
        <div>我是Test组件</div>
        <div>{this.state.msg}</div>
        <div>{this.state.obj.name}</div>
        <button
          onClick={() => {
            let obj = this.state.obj
            let newObj = { ...obj }
            newObj.name = 'ls'
            this.setState({
              //   msg: '哈哈',
              obj: newObj,
            })
          }}
        >
          Test按钮
        </button>
      </>
    )
  }
}
