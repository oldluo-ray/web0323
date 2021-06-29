import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  ALL_CHECKED,
  DELETE_ALL_DONE,
} from './constants'

let initState = {
  list: [
    { id: 1, todoName: '吃饭', isDone: false },
    { id: 2, todoName: '敲代码', isDone: true },
  ],
}
export default function (state = initState, action) {
  const { list } = state
  let newList = []
  switch (action.type) {
    case ADD_TODO:
      // action.data 传入的是todoName, 所以要根据这个todoName,创建一个任务对象
      // 然后将任务对象添加到数组中,最后给redux赋值
      let id = list.length ? list[list.length - 1].id + 1 : 1
      let obj = {
        todoName: action.data,
        isDone: false,
        id,
      }
      // 根据list得到一个新的数组
      newList = [...list]
      newList.push(obj)
      return {
        ...state,
        list: newList,
      }

    case UPDATE_TODO:
      list.forEach((item) => {
        if (item.id === action.id) {
          item.isDone = !item.isDone
        }
      })
      newList = [...list]
      return {
        ...state,
        list: newList,
      }
    case DELETE_TODO:
      newList = list.filter((item) => item.id !== action.id)
      return {
        ...state,
        list: newList,
      }
    case ALL_CHECKED:
      // 如果每一个都选中,则变成都不选中, 如果有未选中的,就变成都选中
      let result = list.every((item) => item.isDone)
      newList = list.map((item) => {
        item.isDone = !result
        return item
      })

      return {
        ...state,
        list: newList,
      }

    case DELETE_ALL_DONE:
      newList = list.filter((item) => !item.isDone)
      return {
        ...state,
        list: newList,
      }
    default:
      return state
  }
}
