const express = require('express')
const app = express()

// 作用: 默认req.body无法获取post请求上传的数据,加上这行代码就可以了
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
  console.log(req.query)
  res.send('get-ok')
})
app.post('/test', (req, res) => {
  console.log(req.body)
  res.send('post-ok')
})

app.listen(5000, () => {
  console.log('ok')
})
