import { GET_DATA, SET_FLAG } from './constants'
let initState = {
  list: [],
  flag: 'all',
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        //    action.data就是异步请求回来的数据
        list: action.data,
      }
    case SET_FLAG:
      return {
        ...state,
        flag: action.data,
      }
    default:
      return state
  }
}
