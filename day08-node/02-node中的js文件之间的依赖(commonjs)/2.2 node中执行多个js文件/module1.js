function fn() {
  console.log('module1的fn函数执行了')
}

// 导出的代码
module.exports = {
  fn,
}
// module.exports.fn = fn
