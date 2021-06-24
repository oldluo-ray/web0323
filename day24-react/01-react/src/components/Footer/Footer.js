import React from 'react'
import Pubsub from 'pubsub-js'
import './Footer.css'
export default function Footer(props) {
  const { total, doneTotal, allCheckHandle, clearTodoDone } = props
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={total === doneTotal}
          onChange={allCheckHandle}
        />
      </label>
      <span>
        <span>已完成 {doneTotal}</span> / 全部 {total}
      </span>
      <button className="btn btn-danger" onClick={clearTodoDone}>
        清除已完成任务
      </button>
    </div>
  )
}
