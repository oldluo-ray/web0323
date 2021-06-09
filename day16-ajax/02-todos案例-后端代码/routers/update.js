const express = require('express')
const { updateTodo, updateMultiTodos } = require('../db/crud/update')
const { findAllTodos } = require('../db/crud/find')
//创建router实例
const router = express.Router()

// 修改一条任务的状态(是否完成)的路由
router.post('/updateTodo', async (req, res) => {
  // 获取用户上传的数据
  const { id, isDone } = req.body
  await updateTodo(id, isDone)
  let todolist = await findAllTodos()
  res.send(todolist)
})

// 全选的路由
router.post('/updateAllTodos', async (req, res) => {
  // 获取用户上传的数据(为了性能优化,要求浏览器上传的是,需要修改状态的数据,要求上传的是一个数组,数组中存储了所有要修改状态的数据的id)
  let { ids, isDone } = req.body
  // 注意: ids 是一个数组格式的字符串. 想要通过JSON.parse转成数组,数组中应该是双引号
  ids = JSON.parse(ids)

  console.log(ids)
  await updateMultiTodos(ids, isDone)
  let todolist = await findAllTodos()
  res.send(todolist)
})

module.exports = router
