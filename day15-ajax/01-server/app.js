const express = require('express')
const app = express()

app.use((req, res, next) => {
  // 往响应头中添加一条信息
  // Access-Control-Allow-Origin 表示支持CORS.允许任何域名请求服务器的数据
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
app.use(express.urlencoded({ extended: true }))
app.get('/test', (req, res) => {
  // const { callback } = req.query
  // let arr = [1, 2, 3]
  // setTimeout(function () {
  //   res.send(`${callback}(${JSON.stringify(arr)})`) //'fn([1,2,3])'
  // }, 2000)
  res.send([1, 2, 3])
})

app.post('/test', (req, res) => {
  res.send(req.body)
})

app.listen(5000, () => {
  console.log('ok')
})
