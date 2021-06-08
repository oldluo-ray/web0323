/* 

    ajax使用: 

       1. 创建xhr对象
       const xhr = new XMLHttpRequest()
       2. 调用open方法
       xhr.open(请求方式, url) 如果是get, url中要拼接上传的参数
       3. 设置请求头 只有post请求需要设置
       xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
       4. 设置请求主体并发送请求
       xhr.send() 
            get: 不传或null 
            post: 键=值&键=值 

       5. 监听请求的状态
        xhr.onreadystatechange = function(){
            // 完成
            if(xhr.readyState === 4) {

                if(xhr.status === 200){
                    // 成功
                    xhr.responseText //获取响应主体
                    
                }else {
                    //失败了
                }
            }
        }








*/
