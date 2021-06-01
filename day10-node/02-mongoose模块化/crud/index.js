;(async function () {
  // 需要等到数据库连接成功,再执行后面代码
  const db = require('../db')

  await db
  // 引入model
  // 注意: 由于model文件夹中的文件名叫index.所以文件名可以忽略
  const modelObj = require('../model')

  modelObj.create({
    username: 'xxx',
    age: '30',
    gender: '男',
  })
})()
