// 1. 引入fs模块
const fs = require('fs')
// 2. 创建可读流
const rs = fs.createReadStream('./assets/music.mp3')
// 3. 创建可写流
const ws = fs.createWriteStream('./assets/other.mp3')
// 4. 克隆文件
rs.pipe(ws)
// 使用pipe时,可以自动关闭可写流
ws.on('close', function () {
  console.log('可写流关闭了')
})
