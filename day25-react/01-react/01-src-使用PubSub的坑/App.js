import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import PubSub from 'pubsub-js'
import './App.css'
export default function App() {

  console.log('函数组件的状态更新了,整个代码执行了一遍')
  // 修改数据的操作,最好不要出现在异步中
  // let todos = JSON.parse(localStorage.getItem('todos'))
  // if (!todos) {
  //   todos = []
  // }
  // let [list, setList] = useState(todos)
  let [list, setList] = useState([{id:1, todoName: 'haha', isDone:false},{id:2, todoName: 'hehe', isDone:true}])

  useEffect(()=>{
    console.log('外层执行了');
    let token = PubSub.subscribe('addtodoName',(topic,data)=>{

      console.log(data);
      console.log('list',list);
      const newList = [...list]
      let obj = {
        id: Date.now(),
        isDone: false,
        todoName: data
      }
      newList.push(obj)
      console.log('newList',newList);

      setList(newList)

    })
    return () =>{
      // 内层执行了
      PubSub.unsubscribe(token)
    }
  })



  

  const total = list.length
  const doneTotal = list.filter((item) => {
    return item.isDone
  }).length
  // console.log(total, doneTotal)

  //添加任务的回调函数
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
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  // 更新和删除的回调
  function getTodoId(id, type) {
    // console.log(id)
    let newList
    if (type === 'update') {
      newList = [...list]
      newList.forEach((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
      })
    } else if (type === 'delete') {
      newList = list.filter((item) => {
        return item.id !== id
      })
    }
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  // 全选的回调
  function allCheckHandle() {
    // 要先判断每一个任务项是否都选中
    // 如果都选中result就是true, 否则,result是false
    const result = list.every((item) => item.isDone)
    // 如果result是true,每一个变成false, 如果result是false,则每一个都变成true
    const newList = list.map((item) => {
      item.isDone = !result
      return item
    })
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  // 清除已完成任务
  function clearTodoDone() {
    const newList = list.filter((item) => {
      return !item.isDone
    })
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

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
              clearTodoDone={clearTodoDone}
            ></Footer>
          </div>
        ) : (
          <h1>恭喜你暂时没有任务</h1>
        )}
      </div>
    </div>
  )
}
