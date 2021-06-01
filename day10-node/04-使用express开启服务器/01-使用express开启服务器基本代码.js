// 1. 引入express
const express = require('express')

// 2. 创建应用对象
const app = express()

// 定义路由
// app.get('路径',回调函数)
// app.post('路径', 回调函数)
app.get('/abc', (request, response) => {
  // request.query可以直接获取到get请求上传上来的数据. 拿到的就直接是一个解析后的对象
  // console.log(request.query);
  response.send('<h1>中文</h1>')
})
app.post('/abc', () => {
  console.log('/abc-post请求过来了')
})

// 3. 开启服务器
app.listen(5000, (err) => {
  if (err) console.log('启动失败', err)
  else console.log('服务器启动成功')
})
