import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        todoName: '吃饭',
        isDone: true,
      },
      {
        id: 2,
        todoName: '睡觉',
        isDone: true,
      },
      {
        id: 3,
        todoName: '写代码',
        isDone: false,
      },
      {
        id: 4,
        todoName: '找富婆',
        isDone: false,
      },
    ],
  }

  //添加任务的函数
  getTodoName = (todoName) => {
    const { list } = this.state
    // console.log(todoName)
    //生成id值
    let id = list.length ? list[list.length - 1].id + 1 : 1
    // 根据todoName创建一个对象
    let todo = {
      todoName,
      isDone: false,
      id,
    }
    // 最好不要直接操作state里的数据,应该根据旧的数据,得到一份新的数据,然后修改新的数据
    const newList = [...list]
    newList.push(todo)
    this.setState({
      list: newList,
    })
  }

  //删除任务的函数
  deleteTodo = (id) => {
    let { list } = this.state

    let newList = list.filter((item) => {
      return item.id !== id
    })

    this.setState({
      list: newList,
    })
  }

  // 更新任务状态的函数
  updateTodo = (id) => {
    console.log(id)
    // 根据id,找到指定的数据
    let { list } = this.state
    let newList = [...list]
    newList.forEach((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
    })
    this.setState({
      list: newList,
    })
  }

  // 全选按钮的事件处理函数
  updateAll = () => {
    // 判断list中的数据,是否都选中了
    // 如果都选中, 就变成都不选中
    // 如果有一个没选中, 就变成都选中
    let { list } = this.state
    let newList = [...list]

    let result = newList.every((item) => item.isDone)
    // console.log(result)
    // 如果result是true,就表示,接下来所有复选框,都为false
    // 如果result是false,就表示,接下来所有复选框,都为true
    newList.forEach((item) => {
      item.isDone = !result
    })
    this.setState({
      list: newList,
    })
  }

  // 删除所有完成项
  delDoneTodos = () => {
    let { list } = this.state

    const newList = list.filter((item) => !item.isDone)
    this.setState({
      list: newList,
    })
  }
  render() {
    const { list } = this.state
    // 计算完成的个数和总共的个数
    let doneTotal = list.reduce((preValue, item) => {
      return item.isDone ? ++preValue : preValue
    }, 0)

    let allTotal = list.length
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header getTodoName={this.getTodoName}></Header>
          {list.length ? (
            <div>
              <List
                list={list}
                updateTodo={this.updateTodo}
                deleteTodo={this.deleteTodo}
              ></List>
              <Footer
                doneTotal={doneTotal}
                allTotal={allTotal}
                updateAll={this.updateAll}
                delDoneTodos={this.delDoneTodos}
              ></Footer>
            </div>
          ) : (
            <h1>恭喜你,没有任务要完成</h1>
          )}
        </div>
      </div>
    )
  }
}
