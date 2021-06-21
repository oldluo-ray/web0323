import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    msg: '呵呵',
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(this.props)
    // 判断所有数据,如果有一个不等,就应该return ture
    if (
      nextProps.count !== this.props.count ||
      nextState.msg !== this.state.msg
    ) {
      return true
    } else {
      return false
    }
    // return false
  }
  render() {
    console.log('test-render执行了')
    return (
      <>
        <div>我是Test组件</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            this.setState({
              msg: '哈哈',
            })
          }}
        >
          Test按钮
        </button>
      </>
    )
  }
}
