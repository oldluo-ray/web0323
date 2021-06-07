;(async function () {
  const db = require('./database/db')
  const express = require('express')
  const lrRouter = require('./routers/lr')
  const laRouter = require('./routers/loginafter')
  // 引入操作session的第三方包
  const session = require('express-session')
  // 现在session一般都存到数据库中,所以引入将session存到数据库中的第三方包
  const MongoStore = require('connect-mongo')(session)
  // 引入处理cookie的中间件
  var cookieParser = require('cookie-parser')

  // 等待数据库连接成功
  await db
  console.log('数据库连接成功')
  const app = express()

  // 处理静态资源的中间件
  // static中传入存放所有静态资源的路径
  app.use(express.static('./public'))
  // 处理post请求的中间件
  app.use(express.urlencoded({ extended: true }))
  // 处理接收cookie信息的中间件
  app.use(cookieParser())

  // 配置处理session的中间件
  app.use(
    session({
      name: 'web0323', //设置cookie的name，默认值是：connect.sid
      secret: 'atguigu', //参与加密的字符串（又称签名）
      saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
      resave: true, //是否在每次请求时重新保存session
      store: new MongoStore({
        url: 'mongodb://localhost:27017/test-app',
        touchAfter: 24 * 3600, // 24小时之内只修改一次
      }),
      cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 30, // 这一条 是控制 sessionID 的过期时间的！！！
      },
    })
  )

  // 配置模板引擎
  // 告诉express,使用的ejs模板引擎
  app.set('view engine', 'ejs')
  // 告诉express,ejs对应的模板在哪个文件夹下面
  app.set('views', './mb')

  // 将路由拆分出去
  app.use(lrRouter)
  app.use(laRouter)

  //开启服务器
  app.listen(5000, (err) => {
    if (err) console.log('服务器启动失败', err)
    else console.log('服务器启动成功')
  })
})()
