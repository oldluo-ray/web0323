// 在app中需要使用module1的fn1函数,所以要导入module1的代码
// 由于module1导出的是一个对象.所以接收的module1常量就是那个对象
// const module1 = require('./module1')
// const module2 = require('./module2')
// const module3 = require('./module3')

// 在node中,导入的方式都是require()
//  但是 导入的模块分类不同,会有一些差异

// 如果导入的是自定义模块(自己写的js文件), 导入时,需要传入的是路径
// 如果导入的是第三方模块(别人写的js,我们下载下来使用). 导入时,只需要传入模块的名称(js文件的名称)
// 如果导入的是内置模块(比如: node中默认提供的模块),导入时,也是只需要传入模块的名称

const path = require('path')
console.log(path)

// module1.fn1()
// console.log(module2)
// console.log(module3)
