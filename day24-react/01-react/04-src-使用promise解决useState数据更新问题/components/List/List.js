import React, { Component } from 'react'
import './List.css'
export default function List(props) {
  return <ul className="todo-main">{props.children}</ul>
}
