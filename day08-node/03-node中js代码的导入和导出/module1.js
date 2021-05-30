// 一个模块就是一个js文件
// 需要给其他模块使用的,就导出,不想给其他模块使用就不导出
function fn1() {
  console.log('module1')
}

let arr = [1, 2, 3]

// console.log(arr)
// module.exports 默认指向一个对象.
// 将一个新的对象,赋值给module.exports.把原来的对象给覆盖了
module.exports = {
  fn1,
}
