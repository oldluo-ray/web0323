// 创建组件
// 函数组件
// 1. 首字母大写
// 2. 必须写return, return 后面写的就是jsx
// function App() {
//   return <div></div>
// }
import React from 'react'
import Count from './components/Count/Count'
import Test from './components/Test'

// 类组件:
// 1. 首字母大写
// 2. 必须继承React.Component
// 3. 必须定义一个render函数
// 4. render函数中必须写return. return的结构就是jsx
class App extends React.Component {
  state = {
    num: 10,
    obj: {
      name: 'zs',
    },
    count: 0,
  }
  render() {

    return (
      <div>
        <div>{this.state.obj.name}</div>
        <Count
          count={this.state.count}
          num={this.state.num}
          // getProps={this.getProps}
        ></Count>
        <Test count={this.state.count}></Test>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            })
          }}
        >
          按钮
        </button>
      </div>
    )
  }
  // 用来接收子组件数据的函数
  // getProps = (data) => {
  //   console.log(data)
  //   this.setState({
  //     count: data,
  //   })
  // }
  fn = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
}

export default App
