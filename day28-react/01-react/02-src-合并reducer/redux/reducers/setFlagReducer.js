import { SET_FLAG } from '../constants'
let initState = {
  flag: 'all',
}
export default function (state = initState, action) {
  switch (action.type) {
    case SET_FLAG:
      return {
        ...state,
        //    action.data就是异步请求回来的数据
        flag: action.data,
      }
    default:
      return state
  }
}
