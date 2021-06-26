import React from 'react'
import {Link,Route} from 'react-router-dom'
import Item1 from './components/Item1'
import Item2 from './components/Item2'
import Item3 from './components/Item3'
export default function Home(props) {
  console.log(props);
  return <div>
    Home页面
    <div>
      <h5>home中嵌套的内容</h5>
      <Link to="/home/item1">item1</Link>
      <Link to="/home/item2">item2</Link>
      <Link to="/home/item3">item3</Link>

      {/*  嵌套路由在配置路径的时候: 要从一级路由开始 */}
      <Route path="/home/item1" component={Item1}></Route>
      <Route path="/home/item2" component={Item2}></Route>
      <Route path="/home/item3" component={Item3}></Route>
    </div>
  </div>
}
