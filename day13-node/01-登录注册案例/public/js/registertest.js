//  需求: 给注册表单中的每一个表单项做表单校验

// 用于用户名和密码校验的函数
function formTest(reg, tips) {
  // 返回的这个函数,才是真正的事件处理函数
  return function (e) {
    // 2.3 获取用户输入的值
    const value = this.value.trim()
    if (!value) return
    // 2.4 通过正则进行匹配 规则: 数字,字母,下划线都可以 8~12位

    let span = this.nextElementSibling
    // 2.5 校验成功,提示绿色成功文字,否则红色不符合要求的文字
    if (reg.test(value)) {
      // 成功
      span.textContent = 'ok'
      span.style.color = 'green'
    } else {
      // 失败了
      span.textContent = tips
      span.style.color = 'red'
    }
  }
}
// 1. 给用户名做表单校验
// 1.1 获取用户名的元素
let username = document.querySelector('input[name=username]')
// 1.2 给用户名注册事件 input事件
username.oninput = formTest(/^web\w{5,9}$/, '以web开头,共8~12位')
// 2. 给密码框做表单校验
// 2.1 获取密码框的元素
let password = document.querySelector('input[name=password]')
// 2.2 给用户名注册事件 input事件
password.oninput = formTest(/^\w{6,8}$/, '数字,字母,下划线共6~8位')

// 3. 给确认密码框进行表单校验
// 3.1 获取确认密码框
let repassword = document.querySelector('input[name=repassword]')
// 3.2 注册输入事件
repassword.oninput = function () {
  // 3.3 在事件处理函数中判断密码和确认密码是否一致
  const value = this.value.trim()
  if (!value) return
  let span = this.nextElementSibling
  if (password.value.trim() === value) {
    //一致
    span.style.color = 'green'
    span.textContent = 'ok'
  } else {
    // 不一致
    span.style.color = 'red'
    span.textContent = '密码和确认密码不一致'
  }
}

// 4. 点击注册按钮,要判断三个表单是否通过,如果通过了,才将表单注册的请求发送给服务器,否则不发送请求,并提示用户
let registerBtn = document.querySelector('input[type=submit]')
registerBtn.onclick = function (e) {
  //判断依据:
  const spans = document.querySelectorAll('#form span')
  // if (
  //   spans[0].textContent === 'ok' &&
  //   (spans[1].textContent === 'ok') & (spans[2].textContent === 'ok')
  // ) {
  //   // 表单校验通过了
  //   // 有可能用户又修改了密码
  //   if(password.value.trim() === repassword.value.trim()){

  //     // 证明肯定没有问题
  //   }else{

  //   }
  // }else{

  // }

  if (
    !(spans[0].textContent === 'ok') ||
    !(spans[1].textContent === 'ok') ||
    !(spans[2].textContent === 'ok')
  ) {
    alert('表单校验不通过')
    return e.preventDefault()
  }

  if (password.value.trim() !== repassword.value.trim()) {
    alert('密码和确认密码不一致')
    return e.preventDefault()
  }

  //继续往下执行(提交)
}
