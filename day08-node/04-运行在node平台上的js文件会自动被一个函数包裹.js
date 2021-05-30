// function fn() {
//   console.log(arguments.callee.toString()) //返回当前代码所处的函数的信息
// }
// fn()

// console.log(arguments.callee.toString())

// exports 用来导出当前模块的代码
// require 用来导入其他模块的代码
// module  用来导出当前模块的代码
// __filename  存储了当前执行的文件的绝对路径
// __dirname 存储了当前执行的文件所处的文件夹(目录)的绝对路径 (非常重要)

console.log(__filename)
console.log(__dirname)
