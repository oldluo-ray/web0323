import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    const { list } = this.props
    const total = list.length
    const doneTotal = list.filter((item) => item.isDone).length
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneTotal === total}
            onChange={() => {
              this.props.allCheckedTodo()
            }}
          />
        </label>
        <span>
          <span>已完成 {doneTotal}</span> / 全部 {total}
        </span>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.props.deleteAllDone()
          }}
        >
          清除已完成任务
        </button>
      </div>
    )
  }
}
