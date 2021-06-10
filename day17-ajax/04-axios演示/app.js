const express = require('express')

// 解决跨域
const cors = require('cors')

const app = express()

app.use(cors())

// app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.post('/test', (req, res) => {
  res.send(req.body)
})
app.get('/test', (req, res) => {
  res.send(req.query)
})

app.listen(5000, () => {
  console.log('ok')
})
