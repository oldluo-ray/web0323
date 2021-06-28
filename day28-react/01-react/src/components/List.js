import React from 'react'

export default function List(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.getDataAsync()
        }}
      >
        获取列表数据
      </button>
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <div>{item.age}</div>
            <p>{item.info}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
