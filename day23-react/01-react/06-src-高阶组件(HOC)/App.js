import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'

import withForm from './withForm'
const WithLogin = withForm(Login)
const WithRegister = withForm(Register)
export default class App extends Component {
  render() {
    return (
      <div>
        <WithLogin num={10} count={5} msg={123}></WithLogin>
        <WithRegister></WithRegister>
      </div>
    )
  }
}
