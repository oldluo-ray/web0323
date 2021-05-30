let arr = ['a', 'b', 'c']
// let num = 1
function fn2() {}

// 注意: module.exports的默认值是一个空对象,但是不代表只能导出对象.可以导出任务数据类型. 当有多个值要导出的时候,肯定是将多个值包装在对象中,直接导出对象最方便.所以module.exports的默认值是空对象
module.exports = fn2
