import React, { Component } from 'react'
import { Route, Link, Switch, Redirect, NavLink } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'

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
        <NavLink activeClassName="show" to="/detail">
          detail
        </NavLink>
        

        <Route path="/home" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
      </div>
    )
  }
}
