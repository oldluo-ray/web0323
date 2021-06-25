import React, { useState } from 'react'
import './Header.css'
export default function Header(props) {
  const [todo, setTodo] = useState('')

  // 受控组件的事件处理函数
  function fn(e) {
    setTodo(e.target.value.trim())
  }
  // 将任务名传递给app组件的函数
  function addTodo(e) {
    if (e.keyCode === 13) {
      if (!todo) return

      // 将todo传递给app
      props.getTodoName(todo)
      setTodo('')
    }
  }
  return (
    <div className="todo-header">
      <input type="text" value={todo} onChange={fn} onKeyUp={addTodo} />
    </div>
  )
}
