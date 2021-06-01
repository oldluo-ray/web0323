// 1. 引入express
const express = require('express')

// node内置的path模块
// path模块是node中提供的一个专门用来拼接路径的模块
// 有个resolve方法可以拼接路径
const path = require('path')

// 2. 创建应用对象
const app = express()

app.get('/abc', (request, response) => {
  //   response.send('<h1>中文</h1>') //用来响应客户端.只能响应一些字符串
  //   download 可以传递相对路由,也可以传递绝对路径
  //   response.download('./assets/队列.jpg') //响应给浏览器,让浏览器下载指定文件
  //   response.download(__dirname + '/assets/队列.jpg')
  //   sendFile() 也是用来响应文件,但是不是直接下载.如果这个文件浏览器可以打开,则直接打开,无法打开,才下载. 注意: 必须写绝对路径
  //   response.sendFile('./assets/队列.jpg')
  //   response.sendFile(__dirname + '../assets/队列.jpg')
  //   const newPath = path.resolve(__dirname, '../assets/浏览器的事件循环')
  //   response.sendFile(newPath)
  response.redirect('http://www.atguigu.com')

})
app.post('/abc', (request, response) => {
  c
  response.send('ok')
})

// 3. 开启服务器
app.listen(5000, (err) => {
  if (err) console.log('启动失败', err)
  else console.log('服务器启动成功')
})
