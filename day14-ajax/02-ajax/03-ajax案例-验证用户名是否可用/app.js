const express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.post('/test', (req, res) => {
  const { username } = req.body
  let arr = ['zs', 'ls', 'mg', 'hj', 'ph']

  let result = arr.includes(username)
  // res.send 发现传入的是一个对象,会自动调用JSON.stringify() 将一个js对象转成json字符串
  res.send(
    result
      ? { status: 'no', message: '用户名不可用' }
      : { status: 'ok', message: '用户名可用' }
  )
})

app.listen(5000, () => {
  console.log('ok')
})
