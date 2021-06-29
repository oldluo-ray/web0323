import { GET_DATA } from '../constants'
let initState = {
  list: [],
}
export default function (state = initState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        //    action.data就是异步请求回来的数据
        list: action.data,
      }
    default:
      return state
  }
}
