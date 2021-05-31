// 使用mongoose操作mongodb数据库软件
;(async function () {
  // 1. 引入mongoose
  const mongoose = require('mongoose')

  // 2. 连接mongodb数据库软件
  // mongoose.connect('mongodb://127.0.0.1:27017/数据库名')
  // 连接有一个条件,mongodb数据库软件是开启的状态
  // 注意: 之所以没有接收返回的结果,是因为这里不需要这个结果,所以不想接收
  await mongoose.connect('mongodb://127.0.0.1:27017/web0323MGS', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  // 数据库连接成功之后,才有必要执行后面的代码
  console.log('数据库连接成功')

  // 创建约束对象

  // 创建集合对象

  // 根据结合对象,往数据库中添加,移除,修改,查询数据
})()
