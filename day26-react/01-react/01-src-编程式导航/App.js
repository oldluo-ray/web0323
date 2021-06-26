import React, { Component } from 'react'
import { Route, Link, Switch, Redirect, NavLink } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
import Test from './Test'

import './app.css'

// 路由: 一一对应的规则
// 后端路由: url地址和网络资源一一对应的关系
// 前端路由: 路径和视图的一一对应关系
// 前端路由原理:
// 当路径发生变化的时候,阻止浏览器发送请求的默认行为.路径修改被history.listen监听到.然后根据之前配置好的路由规则,去找到当前路径所对应的视图,找到之后,将指定视图渲染
// 前端路由的目的: 实现单页面应用(spa)
export default class App extends Component {
  render() {
    return (
      <div>
        {/* Link就是a标签,需要在哪里展示a标签,就将Link写在哪里 */}
        <NavLink activeClassName="show" to="/home">
          home
        </NavLink>
        <NavLink activeClassName="show" to="/detail/2">
          detail
        </NavLink>
        
        {/* 
          小结: 
          只有被Route组件渲染的组件才能通过props获取到history,location,match 

          history: 
             push('/目标路径', 要传递的参数) 新增一条历史记录
             replace('/目标路径', 要传递的参数) 替换一条历史记录
          location: 
             state 可以用来接收push/replace调用时传递过来的数据

          match: 
             params: 可以接收路由参数 

             注意: 
             1. 配置路由参数 <Route path="/路径/:参数"></Route> 
             2. ? 表示可写可不写
             3. 传递: push/replace('/路径/参数')  还有 Link/NavLink to="/路径/参数"
             4. 如果配置了路由参数,没有写?,但是没有传,对应的组件无法渲染
        
        */}
        <Route path="/home" component={Home}></Route>
        <Route path="/detail/:id?" component={Detail}></Route>
        <Test></Test>
     
      </div>
    )
  }
}
