import { username } from './js/module1'
// 如果对应文件中没有导出,只是想执行这个文件,就可以直接引入. 无需接收
// 注意: 虽然json中没有导出,但是webpack处理的时候,使用了默认导出
import data from './json/data.json'
// 引入css
// import './css/test.css'
console.log(username)
console.log(data)

let fn = (x, y) => {
  console.log('箭头函数')
}
console.log(1 == 2)
