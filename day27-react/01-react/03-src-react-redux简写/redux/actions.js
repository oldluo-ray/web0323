// 定义返回action对象的方法
import { INCREMENT, PUSH } from './constants'

// 返回action对象的方法,叫做actionCreator
// 返回新增数字的需求的方法
function increment() {
  return { type: INCREMENT }
}

// 返回往数组中添加数据的需求的方法
function push(data) {
  return { type: PUSH, data }
}

export { increment, push }
