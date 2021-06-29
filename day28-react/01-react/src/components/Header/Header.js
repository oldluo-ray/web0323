import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: '',
  }

  fn = (e) => {
    this.setState({
      todoName: e.target.value.trim(),
    })
  }

  keyUpHandle = (e) => {
    if (e.keyCode === 13) {
      if (!this.state.todoName) return
      // 将数据存储到redux中
      this.props.addTodo(this.state.todoName)

      // 清空文本框
      this.setState({
        todoName: '',
      })
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          value={this.state.todoName}
          onChange={this.fn}
          onKeyUp={this.keyUpHandle}
        />
      </div>
    )
  }
}
