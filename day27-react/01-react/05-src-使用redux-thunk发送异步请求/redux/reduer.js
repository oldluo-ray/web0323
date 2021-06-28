import { INCREMENT, PUSH } from './constants'
export default function (state = { count: 0, arr: [1, 2, 3] }, action) {
  switch (action.type) {
    case PUSH:
      // 注意: 不要直接修改原来的数据,因为监听redux数据变化,也是浅层对比
      // state.arr.push(action.data)
      let newArr = [...state.arr]
      newArr.push(action.data)
      return {
        ...state,
        arr: newArr,
      }

    default:
      return state
  }
}
