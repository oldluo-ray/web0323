import React, { Component } from 'react'
import PubSub from 'pubsub-js'
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
        <button className="btn btn-danger" onClick={this.deleteTodoOne}>
          删除
        </button>
      </li>
    )
  }

  // 将要删除的id传递给app
  deleteTodoOne = () => {
    let id = this.props.item.id
    // this.props.deleteTodo(id)
    PubSub.publish('id', { type: 'delete', id })
  }

  // 复选框的事件处理函数
  fn = () => {
    //将要修改的数据的id,传递给App组件
    let id = this.props.item.id
    // console.log(id)
    // this.props.updateTodo(id)
    PubSub.publish('id', { type: 'update', id })
  }
}
