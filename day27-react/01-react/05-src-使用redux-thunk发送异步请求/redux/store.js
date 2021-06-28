import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
// 让中间件和调试工具配合使用的函数
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reduer'
// applyMiddleWare(中间件, 中间件, 中间件....)
export default createStore(
  reducer,
  // { count: 1, arr: ['a', 'b'] }, 这是一个可选参数,给store的state初始数据.优先级更高,但是实际开发一般不用
  // 注意: compose...这个函数调用,只在开发环境下使用,生产环境下还写这个代码,会报错.因为生产环境下,没有redux-devtools-extension这个包
  // 解决办法:
  // 判断当前代码执行环境是开发还是生产、
  // 如何判断当前代码执行环境呢?
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
)

// 通过下面的代码可以获取到当前代码执行环境
console.log(process.env.NODE_ENV)
