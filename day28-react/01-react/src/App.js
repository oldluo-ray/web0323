import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import './App.css'
// 这种导入方式,会将所有的组件,一下子都加载到内存中.
// import Todos from './Todos'
// import Home from './Home'
// 我们希望优化: 组件什么时候用了,什么时候才加载
// 优化的代码:
// 详解: import() 可以实现代码分割,最终打包的时候,就不会打包到bundle.js里面
// React.lazy(()=> promise) 负责具体执行懒加载的操作
// 代码懒加载之后,必须要配合Supense.给用户展示正在加载的界面,提高用户体验
const WithTodos = React.lazy(() => import('./container/WithTodos'))
const Home = React.lazy(() => import('./Home'))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={<div>正在加载组件....</div>}>
          <Router>
            <Link to="/home">首页</Link>
            <Link to="/todos">任务页</Link>
            <Route path="/" component={WithTodos} exact></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/todos" component={WithTodos}></Route>
          </Router>
        </Suspense>
      </Provider>
    )
  }
}
