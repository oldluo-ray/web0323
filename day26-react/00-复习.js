/*


    前端路由的目的: 为了实现spa(单页面应用)

    
    前端路由的原理: 只有一个html页面,所有的视图都写在这个页面上. 当浏览器路径发生变化的时候,history.listen可以监听到.在对应的回调函数中,可以根据之前配置好的路由,根据路径找到对应的视图,并且直接渲染. 改变路径时,不发送请求


    在react中如何使用路由: 

       使用:  react-router-dom 
       1. 在index.js/App.js中 引入 import {BrowserRouter as Router} from 'react-router-dom'

        使用Router包裹整个应用的结构. 只用一次

        import {Link, Route} from 'react-router-dom'
      2. Link 可以修改路径,并且不发送请求  写多次

      3. Route 用来配置路由规则 
      写在需要展示组件的地方 可以写多次
        <Route path="/路径" component={组件}></Route>

    默认路由: / 

    路由的匹配规则: 

        模糊匹配(默认): 

            pathname以path开头 
            pathname 地址栏的路径
            path Route组件path的值


        精确匹配:

            pathname 和 path 一致 
            开启精确匹配: exact 属性 写在Route上面. 写了exact的Route是精确匹配,没写的还是模糊匹配


       Switch 
            用来包裹Route组件. 默认Route组件会被遍历进行匹配. 如果前面的匹配成功了,后面的还会继续匹配.如果使用了Switch,前面的匹配成功,后面的就不会再匹配了

       Redirect 

            <Redirect from="/当前路径"  to="/目标路径"></Redirect>

            如果不写from, 当Redirct执行的时候,立刻重定向
            如果写了from, 要在当前地址栏路径是from的路径的时候,才会执行

            注意: from如果要生效,Redirect需要被Switch包裹 

       NavLink

            和Link是一样的. 
            会添加类名,帮我们实现高亮 
            自定义类名: activeClassName


      













*/