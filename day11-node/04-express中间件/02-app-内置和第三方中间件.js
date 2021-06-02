const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//#region
/*
  let express = {
    urlencoded: function(){
        return function(req,res,next){
          req.body = {}
          next()
        }
    }
  }
*/
//#endregion

// app.use使用中间件
// app.use(express.urlencoded({extended: true}))
// app.use(bodyParser.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
  res.send('get-ok')
})
app.post('/test', (req, res) => {
  console.log(req.body)
  res.send('post-ok')
})

app.listen(5000, () => {
  console.log('ok')
})
