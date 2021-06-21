import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    let { username, password, repassword, fn } = this.props
    return (
      <div>
        <h1>注册</h1>
        用户名:
        <input type="text" value={username} onChange={fn('username')} />
        <br />
        密码:
        <input type="password" value={password} onChange={fn('password')} />
        <br />
        确认密码:
        <input type="password" value={repassword} onChange={fn('repassword')} />
        <br />
        <input type="submit" value="注册" />
      </div>
    )
  }
}
