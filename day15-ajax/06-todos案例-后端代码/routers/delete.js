const express = require('express')
//创建router实例
const router = express.Router()

// 删除一条任务数据的路由
router.post('/deleteTodo', (req, res) => {})
// 清除所有已完成任务的路由
router.post('/clearAllDoneTodos', (req, res) => {})

module.exports = router
