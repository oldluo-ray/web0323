// 受控组件: 组件中的表单项被组件的状态控制
import React, { Component } from 'react'

export default class Test1 extends Component {
  state = {
    username: '123',
    info: '简介',
    select: '3',
    isChecked: true,
  }

  fn = (params, e) => {
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
          onChange={(e) => {
            this.fn('username', e)
          }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.info}
          onChange={(e) => {
            this.fn('info', e)
          }}
        ></textarea>
        <select
          name=""
          id=""
          value={this.state.select}
          onChange={(e) => {
            this.fn('select', e)
          }}
        >
          <option value="1">吃饭</option>
          <option value="2">睡觉</option>
          <option value="3">打豆豆</option>
        </select>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={(e) => {
            this.fn('isChecked', e)
          }}
        />
      </div>
    )
  }
}
