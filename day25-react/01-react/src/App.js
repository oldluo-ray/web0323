import React, { Component } from 'react'
import Test from './Test'
const testRef = React.createRef()
const test1Ref = React.createRef()
export default class App extends Component {
  render() {
    return (
      <div id="app">
        <h1 ref={testRef}>app组件</h1>
        <button
          onClick={() => {
            console.log(testRef.current)
            console.log(test1Ref.current)
          }}
        >
          按钮
        </button>
        {/* 注意: 如果ref要绑定组件,也是能绑定类组件, 无法绑定函数组件 */}
        {/* <Test ref={test1Ref} num={1}></Test> */}
        <Test xxxref={test1Ref} num={1}></Test>
      </div>
    )
  }
}
