// 受控组件: 组件中的表单项被组件的状态控制
import React, { Component } from 'react'

export default class Test1 extends Component {
  state = {
    username: '123',
    info: '简介',
    select: '3',
    isChecked: true,
  }

  // fn = (params) => {
  //   return (e) => {
  //     let value =
  //       e.target.type === 'checkbox' ? e.target.checked : e.target.value
  //     this.setState({
  //       [params]: value,
  //     })
  //   }
  // }
  // 函数中返回函数的简写:
  fn = (params) => (e) => {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      [params]: value,
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={this.fn('username')}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.info}
          onChange={this.fn('info')}
        ></textarea>
        <select
          name=""
          id=""
          value={this.state.select}
          onChange={this.fn('select')}
        >
          <option value="1">吃饭</option>
          <option value="2">睡觉</option>
          <option value="3">打豆豆</option>
        </select>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.fn('isChecked')}
        />
      </div>
    )
  }
}
