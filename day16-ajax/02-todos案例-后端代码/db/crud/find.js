const model = require('../model')
//定义一个返回所有任务列表数据的方法
function findAllTodos() {
  return model.find()
}

module.exports = {
  findAllTodos,
}
