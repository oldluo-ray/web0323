import React, { useEffect } from 'react'

export default function Test(props) {
  // 外城的回调,模拟挂载成功
  // 如果第二个参数,不写外层函数就模拟了挂载,又模拟更新
  // 注意: useEffect默认在执行更新之前,会先卸载. 因为不想让挂载的代码,在内存中存在两份
  useEffect(() => {
    // 内部的回调,模拟卸载
    console.log('Test挂载成功,或更新了')
    //window.onclick = fn
    return () => {
      // window.onclick = null
      console.log('Test卸载成功了')
    }
  }, [props.count])

  //   // 关于useEffect的小结:
  //   1. 外层函数默认模拟挂载和更新
  //   2. 内部函数模拟卸载
  //   3. 如果useEffect不传第二个参数, 默认就是1,2的情况
  //   4. 如果useEffect传入第二个参数,传的是一个空的数组, 外层函数就只模拟挂载
  //   5. 如果useEffect传入第二个参数,数组中监听了某个数据,那么只有这个数据发生变化的时候,外层函数才会模拟更新

  //   注意: 由于useEffect只是模拟生命周期钩子函数,所以执行时有一些奇怪现象,比如更新时,先执行卸载. 其实此时组件并没有真正的卸载.只是为了提高性能,所以先清除之前的一些操作,然后再重新添加这些操作
  return <div></div>
}
