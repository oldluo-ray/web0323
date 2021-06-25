import React from 'react'
import './Item.css'
export default function Item(props) {
  const { item } = props

  // input复选框发送id的方法
  function updateTodo() {
    let id = item.id
    props.getTodoId(id, 'update')
  }

  // 删除按钮的事件处理函数
  function deleteTodo() {
    let id = item.id
    props.getTodoId(id, 'delete')
  }
  return (
    <li>
      <label>
        <input type="checkbox" checked={item.isDone} onChange={updateTodo} />
        <span className={item.isDone ? 'active' : ''}>{item.todoName}</span>
      </label>
      <button className="btn btn-danger" onClick={deleteTodo}>
        删除
      </button>
    </li>
  )
}
