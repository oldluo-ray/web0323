import React from 'react'
import './Footer.css'
export default function Footer(props) {
  const { total, doneTotal, allCheckHandle, deleteAllTodo } = props
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={doneTotal === total}
          onChange={allCheckHandle}
        />
      </label>
      <span>
        <span>已完成 {doneTotal}</span> / 全部 {total}
      </span>
      <button className="btn btn-danger" onClick={deleteAllTodo}>
        清除已完成任务
      </button>
    </div>
  )
}
