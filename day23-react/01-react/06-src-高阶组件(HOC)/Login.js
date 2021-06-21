import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    let { username, password, fn } = this.props
    console.log(this.props)
    return (
      <div>
        <h1>登录</h1>
        用户名:
        <input type="text" value={username} onChange={fn('username')} />
        <br />
        密码:
        <input type="password" value={password} onChange={fn('password')} />
        <br />
        <input type="submit" value="登录" />
      </div>
    )
  }
}
