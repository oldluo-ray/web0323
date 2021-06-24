import React, { Component } from 'react'
import MouseUrl from '../assets/mouse.gif'
import usePosition from '../usePosition'
export default function Mouse() {
  // let { x, y } = this.props.data
  const { x, y } = usePosition()
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
