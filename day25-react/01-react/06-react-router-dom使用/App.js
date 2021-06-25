import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'

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
        <Link to="/home">home</Link>
        <Link to="/detail">detail</Link>
        {/* <Home></Home>
        <Detail></Detail> */}
        {/* 要展示的组件,要渲染到哪里,就在哪里写Route */}
        {/* 路由匹配的规则:
          1. 模糊匹配(默认)
            只要 pathname 以 path 开头就会匹配成功(pathname至少和path一模一样,要不然就应该更长)
            pathname就是浏览器地址栏的路径
            path就是component组件的path属性的值

            pathname: /
            path: /   符合
            path: /home 不符合
            path: /detail 不符合

            pathname: /home
            path: /   符合
            path: /home 符合
            path: /detail 不符合

            pathname: /detail
            path: /  符合  
            path: /home  不符合
            path: /detail 符合

            举例:
            pathname: /a/b
            path: /a 符合
            path: /ab 不符合

            pathname: /a/b
            path: /a 符合
            path: /b 不符合

            pathname: /a/b/c/d
            path: /a/b 符合
            path: /a/bc  不符合

            pathname: /ac/b/c
            path: /ac 符合
            path: /ac/b 符合

            

          2. 精确匹配
          pathname要和path一模一样
          开启精确匹配,是指某个Route组件开启精确匹配,无法全局开启精确匹配

          pathname: /home
          path: /  精确匹配 不符合
          path: /home  模糊匹配 符合
          path: /detail  模糊匹配 不符合

          pathname: /detail
          path: /  精确匹配 不符合
          path: /home  模糊匹配 不符合
          path: /detail  模糊匹配 符合
        
        
        */}
        {/* 哪个Route加了exact就是精确匹配,没加的还是模糊匹配 */}
        <Route path="/" component={Home} exact></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        {/* <Route path="/ac" component={Home}></Route>
        <Route path="/ac/b" component={Detail}></Route> */}
      </div>
    )
  }
}
