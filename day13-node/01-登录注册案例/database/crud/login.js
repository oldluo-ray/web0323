// 定义注册的函数(把具体将用户数据,存储到数据库里面的代码,封装到这个函数汇总)

const model = require('../model')
// 引入md5模块进行加密
const md5 = require('md5')

// 用户注册的函数
function findUser(username, password) {
  return model.findOne({ username, password: md5(password) })
}
function findUserById(userid) {
  return model.findOne({_id: userid})
}

module.exports = {
  findUser,
  findUserById
}
