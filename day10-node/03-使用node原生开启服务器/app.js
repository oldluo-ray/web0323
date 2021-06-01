// 1. 引入一个node中内置的模块 http
const http = require('http')

// 2. 创建一个服务器对象
// 当客户端给服务器发送请求,这个回调函数就会触发
// 当客户端给服务器发送请求过来的时候,回调函数被调用,会将这次请求的请求对象和用来给这次请求响应的响应对象传入到这个回调函数中
const server = http.createServer(function (request, response) {
  console.log('客户端发送请求过来')
  // 获取get请求上传的数据
  console.log(request.url) ///?name=zs&age=18
  // 响应客户端信息
  response.setHeader('content-type', 'text/html;charset=utf8')
  response.end('<h1>哈哈哈</h1>')
})

//3. 开启服务器
server.listen(5000, (err) => {
  if (err) console.log('服务器开启失败', err)
  else console.log('服务器开启成功')
})
