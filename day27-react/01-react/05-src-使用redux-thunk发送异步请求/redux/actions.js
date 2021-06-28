import axios from 'axios'
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

// 为了在redux中发送异步请求,按照redux-thunk的要求,在这里定义一个异步action
function pushAsync() {
  return async (dispatch) => {
    // 在这个函数体中发送异步请求
    let result = await axios({
      method: 'get',
      url: 'http://127.0.0.1:5000/test',
    })
    console.log(result.data)
    dispatch(push(result.data))
  }
}

export { increment, push, pushAsync }
