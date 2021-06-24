import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import PubSub from 'pubsub-js'
import './App.css'
export default function App() {
  // 修改数据的操作,最好不要出现在异步中
  let [list, setList] = useState([
    { id: 1, todoName: '吃饭', isDone: true },
    { id: 2, todoName: '敲代码', isDone: false },
  ])

  function getTodoName(todoName) {
    // console.log(todoName)
    // 1. 根据todoName创建一个任务对象
    // 创建id
    let id = list.length ? list[list.length - 1].id + 1 : 1
    let todoObj = {
      todoName,
      isDone: false,
      id,
    }
    // 2. 将任务对象,添加到list中
    const newList = [...list]
    newList.push(todoObj)
    // 3. 修改数据,更新视图
    setList(newList)
  }

  let promise

  useEffect(async () => {
    promise = new Promise((resolve, reject) => {
      PubSub.subscribe('addtodoName', (topic, data) => {
        console.log(data)
        resolve(data)
      })
      return () => {}
    }, [])
    let todoName = await promise
    //   // 1. 根据todoName创建一个任务对象
    //   // 创建id
    let id = list.length ? list[list.length - 1].id + 1 : 1
    let todoObj = {
      todoName,
      isDone: false,
      id,
    }
    // 2. 将任务对象,添加到list中
    const newList = [...list]
    newList.push(todoObj)
    // 3. 修改数据,更新视图
    setList(newList)
  })

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header getTodoName={getTodoName}></Header>
        <div>
          <List>
            {list.map((item) => (
              <Item key={item.id} item={item}></Item>
            ))}
          </List>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
