import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class Test extends Component {
  constructor() {
    super()
    this.container = document.createElement('div')
  }
  componentDidMount() {
    console.log(1)
    const test = document.getElementById('test')
    test.appendChild(this.container)
  }
  render() {
    let node = <div id="test">Test组件</div>
    return ReactDOM.createPortal(node, this.container)
  }
}
