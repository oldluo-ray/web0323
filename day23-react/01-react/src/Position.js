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
    window.addEventListener('mousemove', this.handle)
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handle)
  }
  render() {
    return this.props.render(this.state)
  }
}
