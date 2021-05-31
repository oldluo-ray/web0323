// 引入fs模块
const fs = require('fs')
// 1. 简单写入

// fs.writeFile(写入的文件的路径, 写入的内容, 回调函数)
// 当写入完毕,回调被调用. 成功了,err就是null, 失败了,err就是错误对象
// fs.writeFile('./assets/test.txt', '哈哈哈哈', (err) => {
//   console.log(err, data)
// })
// 默认会覆盖原来的内容,flag的值改为a就可以从后面添加. 如果没有这个文件,会自动创建
// fs.writeFile(
//   './assets/test.txt',
//   '吼吼吼',
//   {
//     flag: 'a',
//   },
//   (err) => {
//     console.log(err)
//   }
// )

// 2. 流式写入

// 需求: 读取music.mp3中的数据,写入到一个other.mp3的文件中

// 创建写入流
// const ws = fs.createWriteStream(写入的文件的路径) 返回一个写入流对象
// 创建写入的流的时候,写入流就开启了
const ws = fs.createWriteStream('./assets/other.mp3')
// 为了将music.mp3的数据,写入到指定文件,所以需要创建一个读取流
const rs = fs.createReadStream('./assets/music.mp3')
// 调用这个方法,将数据,写入到指定文件中
rs.on('data', (data) => {
  // 读取到一部分数据,就直接将这一部分数据,写入到指定文件中
  //   ws.write(要写入的数据)
  ws.write(data)
})

// 读取流打开了会自动关闭.那么写入流也会自动关闭吗?
// 写入流不会自动关闭. 所以写入流需要我们自己手动关闭
// 写入完毕的时候就关闭写入流, 读取流关闭的时候,意味着写入完毕.
rs.on('close', function () {
  // 关闭写入流
  ws.end()
})
ws.on('close', function () {
  console.log('写入流关闭了')
})
ws.on('open', function () {
  console.log('写入流开启了')
})
