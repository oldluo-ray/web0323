import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { list, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {list.map((item) => (
          <Item
            key={item.id}
            item={item}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          ></Item>
        ))}
      </ul>
    )
  }
}
