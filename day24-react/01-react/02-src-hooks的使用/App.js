import React, { useState, useEffect } from 'react'
import Test from './Test'
import Test1 from './Test1'

export default function App() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('哈哈')

  // useEffect的回调函数,模拟了类组件中componentDidMount和componentDidUpdate两个生命周期钩子函数
  // 如果useEffect传入第二个参数,参数是一个空的数组,那么回调函数就只模拟componentDidMount
  useEffect(() => {
    // console.log('组件挂载成功或更新成功了')

    // 这个内部的回调函数,模拟的是组件卸载的生命周期钩子函数
    return () => {}
  }, [])

  return (
    <div>
      <div>{count}</div>
      <div>{msg}</div>
      <button
        onClick={() => {
          // 类似于setState
          setCount(count)
          // setMsg('呵呵')
        }}
      >
        按钮
      </button>
      {/* {!count && <Test></Test>} */}
      <Test count={count}></Test>
      <Test1></Test1>
    </div>
  )
}
