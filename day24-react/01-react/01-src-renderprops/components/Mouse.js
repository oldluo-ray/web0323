import React, { Component } from 'react'
import MouseUrl from '../assets/mouse.gif'

export default class Mouse extends Component {
  render() {
    let { x, y } = this.props.data
    return (
      <div>
        <img
          src={MouseUrl}
          alt=""
          style={{ position: 'absolute', left: x, top: y, width: 100 }}
        />
      </div>
    )
  }
}
