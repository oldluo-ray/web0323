import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App() {
  let initList = [
    { id: 1, todoName: 'haha', isDone: false },
    { id: 2, todoName: 'hehe', isDone: true },
  ]
  let [list, setList] = useState(initList)

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>

        <div>
          <List>
            <Item></Item>
          </List>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
