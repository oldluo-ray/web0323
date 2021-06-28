import { GET_DATA } from './constants'
import axios from 'axios'
//定义同步action
function getData(data) {
  return { type: GET_DATA, data }
}

// 定义一个异步action,用于发送ajax请求
function getDataAsync() {
  return async (dispatch) => {
    let result = await axios({
      method: 'get',
      url: 'http://127.0.0.1:5000/test',
    })
    dispatch(getData(result.data))
  }
}

export { getDataAsync }
