const express = require('express')

const app = express()

app.get('/test', () => {})
app.post('/test', (req, res) => {
  setTimeout(() => {
    res.send('post-test')
  }, 2000)
})

app.listen(5000, () => {
  console.log('ok')
})
