// 1. 引入mongoose
const mongoose = require('mongoose')
//2. 连接数据库
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/web0323mgs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
