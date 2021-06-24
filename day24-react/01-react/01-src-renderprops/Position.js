import React, { Component } from 'react'

export default class Position extends Component {
  state = {
    x: 0,
    y: 0,
  }
  handle = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }
  componentDidMount() {
    console.log(this.props)
    window.addEventListener('mousemove', this.handle)
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handle)
  }
  render() {
    // return this.props.render(this.state)
    return this.props.children(this.state) //children专门用来获取子节点
  }
}
