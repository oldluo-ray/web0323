import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Count from './Count'

export default function App() {
  return (
    <Provider store={store}>
      <div>
        {/* 这个Count组件,其实是connect函数执行之后返回的高阶组件, 这个高阶组件中的子组件,才是真正的Count组件 */}
        <Count></Count>
      </div>
    </Provider>
  )
}
