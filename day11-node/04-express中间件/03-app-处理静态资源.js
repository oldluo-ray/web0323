const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()


// 处理静态资源的中间件： html,css,js,图片,音频.... 
app.use(express.static('./public'))

app.get('/test', (req, res) => {
  res.send('get-ok')
})
app.post('/test', (req, res) => {
  console.log(req.body)
  res.send('post-ok')
})

// app.get('/a.html',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'public','a.html'))
// })

app.listen(5000, () => {
  console.log('ok')
})
