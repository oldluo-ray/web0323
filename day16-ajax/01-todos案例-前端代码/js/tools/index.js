// 定义工具函数的文件

// Util对象上存储了所有的工具函数
let Util = {}

// 发送ajax请求
Util.myAjax = function (options) {
  return new Promise((resolve, reject) => {
    let { url, type = 'get', data } = options

    if (!url) return

    const xhr = new XMLHttpRequest()
    let dataStr = Util.obj2str(data)
    if (type === 'get') {
      url += '?' + dataStr
      dataStr = null
    }
    xhr.open(type, url)

    if (type === 'post') {
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    }

    xhr.send(dataStr)

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status == 200) {
          let result = JSON.parse(xhr.responseText)
          resolve(result)
        } else {
          reject()
        }
      }
    }
  })
}

// 将data对象转成键值对字符串
Util.obj2str = function (data) {
  let arr = []
  for (let key in data) {
    arr.push(`${key}=${data[key]}`)
  }

  return arr.join('&')
}

// 渲染页面
Util.render = function (data) {
  // 如果data没有数据,就给用户一个提示
  if (data.length === 0) {
    document.getElementById('tip').style.display = 'block'
    document.querySelector('.todo-main').style.display = 'none'
    document.querySelector('.todo-footer').style.display = 'none'
  } else {
    document.getElementById('tip').style.display = 'none'
    document.querySelector('.todo-main').style.display = 'block'
    document.querySelector('.todo-footer').style.display = 'block'
  }
  // data是一个数组,有多条数据,就渲染多少个li标签
  let newArr = data.map((item) => {
    return `<li>
      <label>
        <input data-id=${item._id} type="checkbox" ${
      item.isDone === 'true' ? 'checked' : ''
    }/>
        <span class="${item.isDone === 'true' ? 'active' : ''}">${
      item.todoName
    }</span>
      </label>
      <button data-id=${item._id} class="btn btn-danger" >删除</button>
    </li>`
  })
  // 将拼接好的字符串,渲染到todo-main中
  document.getElementsByClassName('todo-main')[0].innerHTML = newArr.join('')

  // 修改底部的任务的个数
  let doneTotal = document.getElementById('doneTotal')
  let allTotal = document.getElementById('allTotal')
  // 遍历数组,计算有多少个已完成
  let count = 0
  data.forEach((item) => {
    if (item.isDone === 'true') {
      count++
    }
  })
  doneTotal.innerText = '已完成 ' + count
  allTotal.innerText = '/ 全部 ' + data.length

  // 动态的渲染全选
  let allCheckbox = document.querySelector('.todo-footer input[type=checkbox]')
  // 全选选中的前提: 1. 总数不为0 2. 已完成项和总数相等,就是要选中
  //   if (data.length > 0) {
  //     if (data.length === count) {
  //       allCheckbox.checked = true
  //     } else {
  //       allCheckbox.checked = false
  //     }
  //   } else {
  //     allCheckbox.checked = false
  //   }
  if (data.length > 0 && data.length === count) {
    allCheckbox.checked = true
  } else {
    allCheckbox.checked = false
  }
}
