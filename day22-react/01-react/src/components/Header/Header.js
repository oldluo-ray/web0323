import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: '',
  }
  // 受控组件的事件处理函数
  fn = (e) => {
    this.setState({
      todoName: e.target.value.trim(),
    })
  }

  // 按下回车键的事件处理函数
  sendTodoName = (e) => {
    const { todoName } = this.state
    if (e.keyCode === 13) {
      if (!todoName) return

      this.props.getTodoName(todoName)
      //清空文本框
      this.setState({
        todoName: '',
      })
    }
  }
  render() {
    const { todoName } = this.state
    return (
      <div className="todo-header">
        <input
          type="text"
          value={todoName}
          onChange={this.fn}
          onKeyUp={this.sendTodoName}
        />
      </div>
    )
  }
}
