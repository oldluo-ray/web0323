import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App() {
  // 当组件创建的时候,或组件中state被修改的时候,函数组件中的代码会重新执行
  // 直接从缓存中获取数据
  let todos = JSON.parse(localStorage.getItem('todos'))
  if (!todos) {
    todos = []
  }

  // let initList = [
  //   { id: 1, todoName: 'haha', isDone: false },
  //   { id: 2, todoName: 'hehe', isDone: true },
  // ]
  let [list, setList] = useState(todos)

  // 添加任务的函数
  function getTodoName(todoName) {
    // console.log(todoName)
    // 创建任务对象
    let id = list.length ? list[list.length - 1].id + 1 : 1
    let obj = {
      todoName,
      isDone: false,
      id,
    }

    const newList = [...list]
    newList.push(obj)
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  // 接收todoid的函数
  function getTodoId(id, type) {
    let newList = []
    // console.log(id, type)
    if (type === 'update') {
      list.forEach((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
      })

      newList = [...list]
    } else {
      newList = list.filter((item) => {
        // if (item.id !== id) {
        //   return true
        // } else {
        //   return false
        // }
        return item.id !== id
      })
      // console.log(newList)
    }

    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  // 全选按钮的事件处理函数
  function allCheckHandle() {
    // 判断任务项是否都选中,如果都选中了,变成都不选中,如果有一个没选中,就变成都选中
    let result = list.every((item) => item.isDone)
    const newList = list.map((item) => {
      // result是true, 所有任务变成false. result是false,所有任务变成true
      item.isDone = !result
      return item
    })

    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  // 删除完成项的事件处理函数
  function deleteAllTodo() {
    const newList = list.filter((item) => !item.isDone)
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  // 共多少任务, 完成多少任务
  let total = list.length
  let doneTotal = list.filter((item) => item.isDone).length
  // console.log(total, doneTotal)

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header getTodoName={getTodoName}></Header>

        {list.length ? (
          <div>
            <List>
              {list.map((item) => (
                <Item key={item.id} item={item} getTodoId={getTodoId}></Item>
              ))}
            </List>
            <Footer
              total={total}
              doneTotal={doneTotal}
              allCheckHandle={allCheckHandle}
              deleteAllTodo={deleteAllTodo}
            ></Footer>
          </div>
        ) : (
          <h1>暂无数据</h1>
        )}
      </div>
    </div>
  )
}
