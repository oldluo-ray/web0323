// 函数的三要素:
// 函数名 myAjax
// 参数 配置对象
// 返回值 由于ajax是异步行为,所以无法返回响应的结果.所以这个函数暂时不考虑返回值
function myAjax(options) {
  // 1. 解构options中的参数
  let {
    url,
    type = 'get', // 如果用户没有写type,type的默认值就是get
    timeout = 60000,
    dataType = 'json',
    data,
    success,
    error,
    beforeSend,
    complete,
  } = options
  // 2. 判断是否传入了url.如果url没有传,就直接return
  if (!url) return
  // 注意: 三元和与或逻辑中都不能写return
  //   !url ? return : undefined
  //   !url && return

  // 3. 创建xhr对象
  const xhr = new XMLHttpRequest()

  // 设置超时事件
  xhr.timeout = timeout

  // 调用obj2str,将data转成一个键值对的字符串
  let params = obj2str(data)
  // 4. 调用open方法
  //   if (type === 'get') {
  //     xhr.open(type, url + '?' + params)
  //   } else {
  //     xhr.open(type, url)
  //   }
  if (type === 'get') {
    url += '?' + params
    params = null
  }

  xhr.open(type, url)
  // 5.设置请求头
  if (type === 'post') {
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  }

  // 6. 设置请求主体并发送请求
  //   if (type === 'get') {
  //     xhr.send()
  //   } else {
  //     xhr.send(params)
  //   }

  // 请求发送之前,调用beforeSend
  // 如果没有传入beforeSend,请求正常发送
  // 如果传了beforeSend,里面没有显式的写return false, 还是正常发送请求
  // 如果传了beforeSend,里面有显式的写return false, 不发送请求
  let result = beforeSend && beforeSend()
  if (result === false) return
  xhr.send(params)

  // 处理响应
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      //表示请求完成
      complete && complete()
      if (xhr.status === 200) {
        let value
        if (dataType === 'text') {
          value = xhr.responseText
        } else if (dataType === 'json') {
          value = JSON.parse(xhr.responseText)
        }
        success && success(value)
      } else {
        //失败
        error && error(xhr)
      }
    }
  }
}

// 封装一个函数,用来将对象转成键值对的字符串
function obj2str(data) {
  if (!data) return
  let arr = []
  for (let key in data) {
    arr.push(key + '=' + data[key])
  }

  return arr.join('&')
}
