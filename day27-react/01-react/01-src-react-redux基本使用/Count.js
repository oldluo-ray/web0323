import React, { Component } from 'react'
import { connect } from 'react-redux'
class Count extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>计数器案例</h1>
        <div>{this.props.count}</div>
        <button
          onClick={() => {
            this.props.dispatch({ type: 'INCREMENT' })
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
// 这个函数用来将redux的数据通过props传递给react组件.要求就必须按照这个写法去写
// state是redux中的state的数据
function mapStateToProps(state) {
  // 这个state是redux中的所有数据,但是可能Count组件中只要拿到redux中部分数据,所以Count组件中需要什么,就在return里写什么. 比如: Count中需要count属性的值,就只写state.count
  console.log(state)
  return {
    // 这里属性写成什么, react组件中props的属性就是什么
    count: state.count,
  }
}
// connect函数调用完毕之后,返回一个高阶组件.高阶组件会监听redux数据的变化,并且将redux的数据通过props传递给Count组件
// 如果connect函数第一次调用,不传第一个参数,那么Count组件中就只能拿到dispatch,拿不到redux数据
// 如果connect函数第一个调用,传入了第一个参数(按照要求,应该是一个固定写法的函数), 那么Count组件中就可以接收到redux中的数据了
export default connect(mapStateToProps)(Count)
