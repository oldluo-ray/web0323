import { createStore } from 'redux'
// 1. 下载redux yarn add redux / npm i redux
// 2. 引入redux
// 3. 创建store对象
// const store = createStore(reducer函数)
const store = createStore(reducer)
// 4. 在创建store之前,要先定义reducer函数
// reducer被调用的时机:
// 1. createStore的时候,会调用一次,为了初始化state的数据
// 2. 调用store.dispatch()的时候,用来修改数据
async function reducer(state = { count: 0 }, action) {
  // state : {count: 0}
  // action: {type: '@@redux/INIT6.d.q.o.6.a'}
  // console.log(state, action)
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        //count: 0
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'TEST':
      let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          let count = 10
          resolve(count)
        }, 2000)
      })

      return {
        ...state,
        count: result,
      }

    // 一个reducer中必须写一个default, default中必须return state
    // 在createStore的时候,reducer会执行一次,一定会走到default这里,将默认值作为初始化,赋值给store的state
    default:
      return state
  }
}

store.subscribe(() => {
  // state的数据发生变化了,这个回调会被调用
  console.log(store.getState())
})
// 获取获取到store中state的值
// console.log(store.getState())
// // 执行dispatch,reducer函数就会被调用
// // 要求传入一个action对象
store.dispatch({ type: 'INCREMENT' })
// console.log(store.getState())
store.dispatch({ type: 'INCREMENT' })
// console.log(store.getState())
store.dispatch({ type: 'DECREMENT' })
// console.log(store.getState())
// store.dispatch({ type: 'TEST' })
