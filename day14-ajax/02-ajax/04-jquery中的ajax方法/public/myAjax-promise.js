function myAjax(options) {
  return new Promise((resolve, reject) => {
    // 1. 解构options中的参数
    let {
      url,
      type = 'get', // 如果用户没有写type,type的默认值就是get
      timeout = 60000,
      dataType = 'json',
      data,
    } = options
    // 2. 判断是否传入了url.如果url没有传,就直接return
    if (!url) return

    // 3. 创建xhr对象
    const xhr = new XMLHttpRequest()

    // 4. 设置超时事件
    xhr.timeout = timeout

    // 5.调用obj2str,将data转成一个键值对的字符串
    let params = obj2str(data)
    // 6. 判断是否是get方法,如果是get方法,将要上传的数据,添加到url后面
    if (type === 'get') {
      url += '?' + params
      params = null
    }
    // 7.设置请求首行
    xhr.open(type, url)
    // 8.设置请求头
    if (type === 'post') {
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    }

    // 10. 发送请求
    xhr.send(params)

    // 11.处理响应
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        // 12.表示请求完成

        if (xhr.status === 200) {
          // 13.表示请求成功
          let value
          if (dataType === 'text') {
            value = xhr.responseText
          } else if (dataType === 'json') {
            value = JSON.parse(xhr.responseText)
          }

          resolve(value)
        } else {
          //14.表示失败
          reject()
        }
      }
    }
  })
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
