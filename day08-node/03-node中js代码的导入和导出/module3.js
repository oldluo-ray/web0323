let arr = [8, 9, 0]

let num = 10

// 注意: exports 指向一个对象. 导出的也是这个对象
// exports.arr = arr
// module.exports = {
//   num,
// }

// exports.arr = arr
// module.exports.num = num
// exports = {
//   num,
// }

// 注意: module.exports = exports = {}
// 1. 在node中,module对象和exports是同一级,所以直接写exports的时候,绝不是module.exports的简写

// 2. 每一个模块都有一个自己的module.exports 和 exports . 他们默认指向同一个对象.跟其他模块一点关系都没有

// 3.如果exports和module.exports指向不同,以module.exports为准
