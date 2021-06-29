import React, { Component } from 'react'
import WithItem from '../../container/WithItem'
import './List.css'
export default class List extends Component {
  render() {
    // console.log(this.props.list)
    return (
      <ul className="todo-main">
        {this.props.list.map((item) => {
          return <WithItem key={item.id} item={item}></WithItem>
        })}
      </ul>
    )
  }
}
