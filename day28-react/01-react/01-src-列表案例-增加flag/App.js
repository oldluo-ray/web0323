import React from 'react'
import { Provider } from 'react-redux'
import WithList from './container/WithList'
import store from './redux/store'

// 需求:
// 给后台发送请求,获取列表数据,然后数据存储到redux中.react中从redux里面获取数据,最后将数据渲染到页面上
export default function App() {
  return (
    <Provider store={store}>
      <WithList></WithList>
    </Provider>
  )
}
