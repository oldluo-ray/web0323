import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    let { doneTotal, allTotal } = this.props
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneTotal === allTotal}
            onChange={this.props.updateAll}
          />
        </label>
        <span>
          <span>已完成 {doneTotal}</span> / 全部 {allTotal}
        </span>
        <button className="btn btn-danger" onClick={this.props.delDoneTodos}>清除已完成任务</button>
      </div>
    )
  }
}
