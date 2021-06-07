// 创建一个路由器对象
const express = require('express')
const { createUser } = require('../database/crud/register')
const { findUser } = require('../database/crud/login')
// 这个router和app差不多,也可以用来定义路由
const router = express.Router()

//在服务器中配置路由,处理注册请求
// http://127.0.0.1:5000/register
router.post('/register', async (req, res) => {
  const { username, password } = req.body
  await createUser(username, password)
  // 重定向到登录页面
  res.redirect('http://127.0.0.1:5000/views/login.html')
})

// 配置处理登录的路由
router.post('/login', async (req, res) => {
  const { username, password } = req.body

  let user = await findUser(username, password)
  // console.log(user)
  if (user) {
    // res.send('登录成功')
    // 成功,就要跳转到一个新的页面(home.html),在这个home.html中展示用户名
    // res.redirect('http://127.0.0.1:5000/views/home.html?username=' + '张三')
    // 调用res.render函数,相当于就是让express,去存放模板的路径下找到指定模板,然后根据指定数据,渲染一个html页面,并且最终将html页面响应给浏览器
    // res.render('模板名称',数据)
    // {username: xxx, password:xxx, date: xxxx , _id: xxxx}
    // let obj = {
    //   flag: false,
    //   arr: ['吃饭', '睡觉', '敲代码'],
    //   user,
    //   message: '<h1>ahahahahahha </h1>',
    // }
    // res.render('home', obj)
    // 往响应头中添加了一个字段: set-cookie: userid=xxxxxxxxx
    // cookie是有有效期的: 默认就是一个会话的时间
    // res.cookie('userid', user._id) //不写第三个参数,默认就是一个会话的时间
    // res.cookie('userid', user._id, { maxAge: 1000 * 60 }) // 添加第三个参数,就是自定义有效期.单位是毫秒
    // 这行代码作用: 1. 开启了session 2. 将userid存储到了session中 3. 调用res.cookie
    req.session.userid = user._id

    // 往响应头中添加了一个字段: location: http://127.0.0.1:5000/home. 并且响应浏览器
    res.redirect('http://127.0.0.1:5000/home')
  } else {
    res.send('用户名或密码错误')
  }
})

module.exports = router
