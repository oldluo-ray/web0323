import React, { useState } from 'react'
import PubSub from 'pubsub-js'
import './Header.css'
export default function Header(props) {
  const [todoName, setTodoName] = useState('')

  // 受控组件的事件处理函数
  function changeTodoName(e) {
    setTodoName(e.target.value.trim())
  }

  // 按下回车键的事件处理函数
  function keyUpHandle(e) {
    if (e.keyCode === 13) {
      // 判断用户输入是否为空
      if (!todoName) return

      //将todoName传递给app组件
      PubSub.publish('addtodoName', todoName)
      // props.getTodoName(todoName)
      setTodoName('')
    }
  }

  return (
    <div className="todo-header">
      <input
        type="text"
        value={todoName}
        onChange={changeTodoName}
        onKeyUp={keyUpHandle}
      />
    </div>
  )
}
