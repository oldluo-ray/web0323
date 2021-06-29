import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    console.log('item', this.props)
    const { item } = this.props
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => {
              let id = item.id
              //调用方法,将id传递给reducer,让reducer去修改数据
              this.props.updateTodo(id)
            }}
          />
          <span className={item.isDone ? 'active' : ''}>{item.todoName}</span>
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.props.deleteTodo(item.id)
          }}
        >
          删除
        </button>
      </li>
    )
  }
}
