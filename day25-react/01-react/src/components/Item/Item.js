import React from 'react'
import './Item.css'
export default function Item(props) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>xxxx</span>
      </label>
      <button className="btn btn-danger">删除</button>
    </li>
  )
}
