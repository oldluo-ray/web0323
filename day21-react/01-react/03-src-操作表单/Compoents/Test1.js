// 受控组件: 组件中的表单项被组件的状态控制
import React, { Component } from 'react'

export default class Test1 extends Component {
  state = {
    username: '123',
    info: '简介',
    select: '3',
    isChecked: true,
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => {
            // 用户输入时触发
            // 拿到用户输入的值,然后修改state
            // console.log(e.target.value)
            this.setState({
              username: e.target.value,
            })
          }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.info}
          onChange={(e) => {
            // 用户输入时触发
            // 拿到用户输入的值,然后修改state
            // console.log(e.target.value)
            this.setState({
              info: e.target.value,
            })
          }}
        ></textarea>
        <select
          name=""
          id=""
          value={this.state.select}
          onChange={(e) => {
            // 用户输入时触发
            // 拿到用户输入的值,然后修改state
            // console.log(e.target.value)
            // console.log(e.target.value)
            this.setState({
              select: e.target.value,
            })
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
            this.setState({
              isChecked: e.target.checked,
            })
          }}
        />
      </div>
    )
  }
}
