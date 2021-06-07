const express = require('express')
const { findUserById } = require('../database/crud/login')
const path = require('path')
const router = express.Router()

// 登录之后的首页
router.get('/home', async (req, res) => {
  // 获取浏览器上传上来的cookie信息
  //   console.log(req.cookies)
  // 只需要判断req.cookies中是否有userid属性
  let { userid } = req.session
  console.log(userid)
  if (userid) {
    // 去数据库中根据userid,查找当前用户
    let user = await findUserById(userid)
    res.render('home', { username: 'zs' })
  } else {
    res.redirect('http://127.0.0.1:5000/views/login.html')
  }
})

//登录之后的详情页
router.get('/detail', (req, res) => {
  //   let { userid } = req.cookies
  let { userid } = req.session
  if (userid) {
    res.sendFile(path.resolve(__dirname, '../public/views/detail.html'))
  } else {
    res.redirect('http://127.0.0.1:5000/views/login.html')
  }
})

module.exports = router
