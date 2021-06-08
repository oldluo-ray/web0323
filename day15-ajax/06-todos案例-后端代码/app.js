;(async function () {
  const db = require('./db/connectdb')
  const express = require('express')
  const cors = require('cors')
  // 引入路由器中间件
  const delRouter = require('./routers/delete')
  const updRouter = require('./routers/update')
  const faRouter = require('./routers/find_add')

  await db
  console.log('数据库连接成功')
  const app = express()

  // 处理post请求上传的参数
  app.use(express.urlencoded({ extended: true }))
  // 利用cors.处理跨域
  app.use(cors())
  // 使用路由器中间件
  app.use(delRouter)
  app.use(updRouter)
  app.use(faRouter)

  app.listen(5000, (err) => {
    if (err) console.log('服务器启动失败', err)
    else console.log('服务器启动成功')
  })
})()
