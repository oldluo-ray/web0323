// import React from 'react'
// import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

// 1. 下载redux yarn add redux / npm i redux
// 2. 引入redux
// 3. 创建store对象
// const store = createStore(reducer函数)
const store = createStore(reducer)
// 4. 在创建store之前,要先定义reducer函数
// state是redux中的数据
// action 是需求
// 假设state = {name: xxx, age:18, gender: 男}
// 计数器案例: state = {count: 0}
// state的默认值,就可以用来初始化store中的数据
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    // 一个reducer中必须写一个default, default中必须return state
    default:
      return state
  }
}

// 获取获取到store中state的值
console.log(store.getState())
// 执行dispatch,reducer函数就会被调用
// 要求传入一个action对象
store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())
store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())
store.dispatch({ type: 'DECREMENT' })
console.log(store.getState())
