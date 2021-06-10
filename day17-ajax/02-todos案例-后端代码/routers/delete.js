const express = require('express')
const { deleteTodo, deleteMultiTodos } = require('../db/crud/delete')
const { findAllTodos } = require('../db/crud/find')
//创建router实例
const router = express.Router()

// 删除一条任务数据的路由
router.post('/deleteTodo', async (req, res) => {
  const { id } = req.body
  await deleteTodo(id)
  let todolist = await findAllTodos()
  res.send(todolist)
})
// 清除所有已完成任务的路由
router.post('/clearAllDoneTodos', async (req, res) => {
  let { ids } = req.body
  ids = JSON.parse(ids)
  await deleteMultiTodos(ids)
  let todolist = await findAllTodos()
  res.send(todolist)
})

module.exports = router
