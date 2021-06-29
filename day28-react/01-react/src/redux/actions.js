import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  ALL_CHECKED,
  DELETE_ALL_DONE,
} from './constants'

// 添加任务
function addTodo(data) {
  return { type: ADD_TODO, data }
}

// 修改任务
function updateTodo(id) {
  return { type: UPDATE_TODO, id }
}

// 删除任务
function deleteTodo(id) {
  return { type: DELETE_TODO, id }
}

// 全选按钮
function allCheckedTodo() {
  return { type: ALL_CHECKED }
}

// 删除所有完成项
function deleteAllDone() {
  return { type: DELETE_ALL_DONE }
}

export { addTodo, updateTodo, deleteTodo, allCheckedTodo, deleteAllDone }
