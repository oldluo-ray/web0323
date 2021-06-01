// 1. 引入express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 定义路由
// 路由: 网络地址和资源的一一对应关系
// 在express中一个路由,是由请求方式, 请求路径以及回调函数组成

// 要使用路由参数: 就必须在配置路由的时候,一起把路由参数配置. 才可以上传
//  request.query 专门用来接收get请求的查询字符串
//  request.params 用来接收路由参数(一般简单的值会用到路由参数: 比如说id, 页数)
//      路由参数: 就是拼接在路径中的参数
//      想要接收,需要在配置路由的位置,配置路由参数
//      配置好的路由参数,默认情况下,发请求的时候,必须传递.如果配置时加了问号,就可以不传
//  request.body 用来接收post请求上传的数据
app.get('/abc/:id?', (request, response) => {
  //   request.query 获取get请求通过查询字符串上传上来的数据
  //   request.params 获取客户端上传上来的路由参数(get/post都行)
  //   request.body 专门用来接收post请求上传的数据库(但是需要使用express的中间件配合)
  console.log(request.params)
  response.send('<h1>中文</h1>')
})
app.post('/abc/:id?', (request, response) => {
  console.log(request.params) //接收路由参数
  console.log(request.body) //接收form表单文本框的内容,但是现在接收不到
  response.send('ok')
})

// 3. 开启服务器
app.listen(5000, (err) => {
  if (err) console.log('启动失败', err)
  else console.log('服务器启动成功')
})
