const model = require('../model')
//定义一个添加任务的函数
function addTodos(todoName) {
  return model.create({
    todoName,
  })
}

module.exports = {
  addTodos,
}
