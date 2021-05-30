//导入module2的代码
const module2 = require('./module2')
module2.fn2()

// 注意:
// 1. 在node中执行的js文件,会自动被node包裹在一个函数里面,所以这里写的所有的js代码,都是在局部作用域中.所以不会全局变量污染
// 2. node中执行的js代码,没有复杂的依赖关系. 只需要考虑,当前js依赖于哪个js,依赖谁就引入谁
// 3. 由于形成了局部作用域,所以每一个js文件中的代码,其他js默认无法获取. 所以中还提供了导入/导出的机制,解决js之间无法获取代码的问题

// 整个代码加载执行过程
// 1. 命令行里面执行了node app.js
// 2. js解析器会进入到app.js中从上到下依次执行代码
// 3. app.js中 有require('./module2')这行代码,所以app.js中后续的代码,暂时不会执行.而是进入到module2中执行代码
// 4. 在module2中, 有 require('./module1') 所以又立刻进入到module1中执行(注意:此时app.js和module2中的代码都还没有执行完毕)
// 5. 进入module1之后,直接将里面的代码执行完毕.这时module2中的require('./module1')这个函数调用才执行完毕,将module1中通过module.exports 导出的对象,作为返回值,赋值给常量module1. 接下来继续执行module2后面的代码.
// 6. 当module2后面的代码执行完毕,才表示app.js中require('./module2')的函数调用执行完毕. 将module2中导出的对象作为返回值,赋值给app.js中常量module2. 然后继续执行app.js中后续的代码.
// 7. 后面的代码执行完毕,就表示整个程序都执行完毕了
