// 创建组件
// 函数组件
// 1. 首字母大写
// 2. 必须写return, return 后面写的就是jsx
// function App() {
//   return <div></div>
// }
import React from 'react'
import Count from './components/Count/Count'

// 类组件:
// 1. 首字母大写
// 2. 必须继承React.Component
// 3. 必须定义一个render函数
// 4. render函数中必须写return. return的结构就是jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <Count></Count>
      </div>
    )
  }
}

export default App
