const express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
  setTimeout(() => {
    res.send(req.query)
  }, 2000)
})
app.post('/test', (req, res) => {
  setTimeout(() => {
    res.send(req.body)
  }, 2000)
})

app.listen(5000, () => {
  console.log('ok')
})
