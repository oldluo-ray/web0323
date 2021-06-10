const model = require('../model')
//定义一个删除一条任务的方法
function deleteTodo(id) {
  return model.deleteOne({ _id: id })
}

//定义一个删除多个任务的方法
function deleteMultiTodos(ids) {
  return model.deleteMany({ _id: { $in: ids } })
}

module.exports = {
  deleteTodo,
  deleteMultiTodos,
}
