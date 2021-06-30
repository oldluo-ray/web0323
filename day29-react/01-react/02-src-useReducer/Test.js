import React, { useReducer } from 'react'
// 初始化数据
const initialState = { count: 0, msg: '哈哈' }
// 定义reducer函数,用来修改数据
// 不需要在这里初始化数据
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    //   default: 也不是用来初始化数据,不写也可以.
    default:
      throw new Error()
  }
}
export default function Test1() {
  // 调用useReducer, 第一个参数是reducer, 第二个参数初始值
  // 返回一个数组,第一个参数是数据(最新的数据), dispatch就是修改数据的方法
  // useReducer其实作用和useState类似,所以写useState的地方,也可以改写成useReducer
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      msg: {state.msg}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
