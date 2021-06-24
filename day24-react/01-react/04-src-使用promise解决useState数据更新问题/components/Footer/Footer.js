import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Footer.css'
export default function Footer() {
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" />
      </label>
      <span>
        <span>已完成 0</span> / 全部 0
      </span>
      <button className="btn btn-danger">清除已完成任务</button>
    </div>
  )
}
