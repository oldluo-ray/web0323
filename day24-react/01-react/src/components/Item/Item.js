import React from 'react'
import './Item.css'
export default function Item(props) {
  const { item, getTodoId } = props
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.isDone}
          onChange={() => {
            // 将要修改的数据传递给app组件
            getTodoId(item.id, 'update')
          }}
        />
        <span className={item.isDone ? 'active' : ''}>{item.todoName}</span>
      </label>
      <button
        className="btn btn-danger"
        onClick={() => {
          getTodoId(item.id, 'delete')
        }}
      >
        删除
      </button>
    </li>
  )
}
