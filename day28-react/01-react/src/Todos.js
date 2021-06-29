import React from 'react'
import WithHeader from './container/WithHeader'
import WithList from './container/WithList'
import WithFooter from './container/WithFooter'

export default function Todos(props) {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <WithHeader></WithHeader>
        {props.list.length ? (
          <div>
            <WithList></WithList>
            <WithFooter></WithFooter>
          </div>
        ) : (
          <h1>暂无数据</h1>
        )}
      </div>
    </div>
  )
}
