import React from 'react'

export default function Home(props) {
  console.log(props);
  return <div>
    Home页面
    <button onClick={()=>{
      props.history.push('/detail/1',{count: 0}) // 会往历史记录中添加一条记录
      // props.history.replace('/detail', {count:0}) // 替换历史记录中的当前记录
      // 小结: push/replace都可以实现修改路径,传递的参数也都一样
      // 第一个参数: 目标路径
      // 第二个参数: 页面切换的时候,需要将某些数据传递给目标页面,就直接写在第二个参数中

      // 在目标组件中通过props.location.state来接收第二个参数传递过来的数据
    }}>home按钮</button>
  </div>
}
