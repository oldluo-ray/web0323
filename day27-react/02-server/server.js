const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/test', (req, res) => {
  let arr = [
    {
      name: 'zs',
      age: 17,
      info: '考试100分',
    },
    {
      name: 'ls',
      age: 20,
      info: '考试99分',
    },
    {
      name: '骚灿',
      age: 14,
      info: '考试1000分',
    },
    {
      name: '野猪佩奇',
      age: 30,
      info: '考试999分',
    },
  ]
  console.log(res.send(arr))
})

app.listen(5000, () => {
  console.log('ok')
})
