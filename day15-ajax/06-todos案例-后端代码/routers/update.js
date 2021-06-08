const express = require('express')
//创建router实例
const router = express.Router()

// 修改一条任务的状态(是否完成)的路由
router.post('/updateTodo', (req, res) => {})

// 全选的路由
router.post('/updateAllTodos', (req, res) => {})

module.exports = router
