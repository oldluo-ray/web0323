// todos案例具体的增伤改查逻辑

// 1. 需求: 获取todolist数据,渲染页面
// 1.1 页面一打开,立刻发送请求,获取数据
let script = document.createElement('script')
script.src = 'http://127.0.0.1:5000/getTodoList?callback=gettodos'
document.body.appendChild(script)

// 1.2 因为获取所有任务数据,使用了jsonp,所以定义一个接受jsonp数据的回调函数
function gettodos(data) {
  //   console.log(data)
  Util.render(data)
}

// 2. 新增任务
// 2.1 获取todo-header 注册键盘抬起事件,
let addTodoInput = document.querySelector('.todo-header input')
// 2.2 在事件处理函数中判断是否是回车
addTodoInput.onkeyup = async function (e) {
  // 2.3 如果是回车,获取用户信息,将用户信息上传给服务器
  if (e.keyCode === 13) {
    let value = this.value.trim()
    if (!value) return
    let todolist = await Util.myAjax({
      url: 'http://127.0.0.1:5000/addTodo',
      type: 'post',
      data: { todoName: value },
    })
    Util.render(todolist)
    this.value = ''
  }
  // 2.4 拿到最新的数据,然后渲染页面
}

// 3. 点击每一个任务的复选框,修改当前任务的状态
const todo_main = document.querySelector('.todo-main')
// console.log(todo_main)
// 由于任务列表都是动态渲染的,所以给里面的元素,注册事件,要使用事件委托
todo_main.addEventListener('click', async function (e) {
  // 判断点击的是否是复选框
  if (e.target.nodeName === 'INPUT') {
    // 这个checked的值就是要将这条任务修改的目标值
    let checked = e.target.checked
    let id = e.target.dataset.id
    let todolist = await Util.myAjax({
      url: 'http://127.0.0.1:5000/updateTodo',
      type: 'post',
      data: {
        id,
        isDone: checked,
      },
    })

    Util.render(todolist)
  }
})

// 4.点击删除按钮,删除当前任务
todo_main.addEventListener('click', async function (e) {
  // 判断点击的是否是复选框
  if (e.target.nodeName === 'BUTTON') {
    let id = e.target.dataset.id
    let todolist = await Util.myAjax({
      url: 'http://127.0.0.1:5000/deleteTodo',
      type: 'post',
      data: {
        id,
      },
    })

    Util.render(todolist)
  }
})

// 5. 全选按钮
const allinput = document.querySelector('.todo-footer input')
allinput.onclick = async function () {
  // 获取当前全选按钮的状态
  let checked = this.checked
  // console.log(checked)
  // 为了获取到哪些数据要修改,所以要遍历元素(li input)
  let inputs = document.querySelectorAll('.todo-main input')
  // 将伪数组转成数组
  inputs = Array.from(inputs)
  // console.log(inputs)
  // let ids
  // if (checked) {
  //   // 找false
  //   ids = inputs.reduce((preValue, item) => {
  //     if (item.checked === false) {
  //       preValue.push(item.dataset.id)
  //     }
  //     return preValue
  //   }, [])
  // } else {
  //   // 找true
  //   ids = inputs.reduce((preValue, item) => {
  //     if (item.checked === true) {
  //       preValue.push(item.dataset.id)
  //     }
  //     return preValue
  //   }, [])
  // }
  let ids = inputs.reduce((preValue, item) => {
    if (item.checked === !checked) {
      preValue.push(item.dataset.id)
    }
    return preValue
  }, [])

  // console.log(ids)
  let todolist = await Util.myAjax({
    url: 'http://127.0.0.1:5000/updateAllTodos',
    type: 'post',
    data: {
      ids: JSON.stringify(ids),
      isDone: checked,
    },
  })

  Util.render(todolist)
}

// 6. 删除所有完成项的按钮
const deleteDoneTodos = document.querySelector('.todo-footer button')
deleteDoneTodos.onclick = async function () {
  // 获取所有的复选框,找到选中的复选框,将对应的id,存储到数组中
  let inputs = document.querySelectorAll('.todo-main input')
  // 将伪数组转成数组
  inputs = Array.from(inputs)
  let ids = inputs.reduce((preValue, item) => {
    if (item.checked) {
      preValue.push(item.dataset.id)
    }
    return preValue
  }, [])
  // console.log(ids)
  let todolist = await Util.myAjax({
    url: 'http://127.0.0.1:5000/clearAllDoneTodos',
    type: 'post',
    data: { ids: JSON.stringify(ids) },
  })
  Util.render(todolist)
}
