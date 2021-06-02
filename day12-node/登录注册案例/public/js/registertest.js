//  需求: 给注册表单中的每一个表单项做表单校验

// 1. 给用户名做表单校验
// 1.1 获取用户名的元素
let username = document.querySelector('input[name=username]')
// 1.2 给用户名注册事件 input事件
username.oninput = function (e) {
  // 1.3 获取用户输入的值
  const value = this.value.trim()
  if (!value) return
  // 1.4 通过正则进行匹配 规则: web... 8~12位
  let reg = /^web\w{5,9}$/
  let span = this.nextElementSibling
  // 1.5 校验成功,提示绿色成功文字,否则红色不符合要求的文字
  if (reg.test(value)) {
    // 成功
    span.textContent = 'ok'
    span.style.color = 'green'
  } else {
    // 失败了
    span.textContent = '应该是web开头,8~12位'
    span.style.color = 'red'
  }
}
