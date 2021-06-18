import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    const { item } = this.props

    return (
      <li>
        <label>
          <input type="checkbox" checked={item.isDone} onChange={this.fn} />
          <span className={item.isDone ? 'done' : ''}>{item.todoName}</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    )
  }

  fn = () => {}
}
