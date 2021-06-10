let username = 'module2'
function fn2() {
  console.log('module2-fn2')
}

// 统一导出
// 注意: 写多次, 一般使用了统一导出,就写一次, 里面要写的应该是变量名和函数名
export { username }
export { fn2 }
