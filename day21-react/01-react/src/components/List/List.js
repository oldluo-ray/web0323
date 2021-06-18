import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { list } = this.props
    return (
      <ul className="todo-main">
        {list.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </ul>
    )
  }
}
