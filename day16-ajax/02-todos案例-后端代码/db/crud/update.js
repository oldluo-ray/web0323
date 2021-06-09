const model = require('../model')
//定义一个修改一条任务状态的方法
function updateTodo(id, isDone) {
  return model.updateOne({ _id: id }, { $set: { isDone } })
}

//定义一个修改多个任务状态的方法
function updateMultiTodos(ids, isDone) {
  return model.updateMany({ _id: { $in: ids } }, { $set: { isDone } })
}

module.exports = {
  updateTodo,
  updateMultiTodos,
}
