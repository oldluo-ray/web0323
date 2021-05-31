// 1. node中读取文件,需要使用一个内置模块 fs模块
// 引入fs模块
const fs = require('fs')

// 简单读取
// fs.readFile(文件路径, 回调函数)
// 异步读取
// fs.readFile('./assets/防盗链.txt', (err, data) => {
//   // err 如果读取成功,就是null, 失败就是错误对象
//   // data就是读取到的数据,默认是一个buffer对象
//   console.log(err, data.toString())
// })

// 流式读取

// 1. 创建一个可读流
// fs.createReadStream(读取的文件的路径) 返回一个读取流对象
// 当创建可读流的时候,读取流就已经开启了
const rs = fs.createReadStream('./assets/music.mp3')

// 可以监听流的读取. 每读一次,回调函数执行一次.直到读取完毕
rs.on('data', (data) => {
  console.log(data)
})

// 监听读取流的开启和关闭
rs.on('open', function () {
  console.log('读取流开启了')
})
// 读取流可以自动关闭.读完之后,自动关闭
rs.on('close', function () {
  console.log('读取流关闭了')
})
