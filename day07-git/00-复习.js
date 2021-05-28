/*

    promise的作用: 

        配合async和await解决回调地狱问题 


        promise是一个异步容器(异步代码写在new Promise的同步回调中)


        同步回调:  直接在主线程中立刻执行
        异步回调:  回调函数会先推入到队列中

        宏队列: 定时器的回调, 普通的回调, 事件处理函数
        微队列: promise的回调

        优先执行微队列中的任务



    promise的使用: 

        实际开发的使用: 
        // 1.每一个请求都要封装成一个异步函数
        // 2. 每一个函数中要返回一个promise实例
         function fn(){
            return new Promise((resolve, reject)=>{
                3. 执行异步操作
                4. 如果异步成功,就直接调用resolve(值)
                5. 如果异步失败,就直接调用reject(值)

            })
         }

         6. 调用这个函数, 接收promise成功的结果
         let res = await fn() // 注意: await要被一个async 函数包裹 
         7. 如果异步成功,await后面的代码就会执行.如果promise不成功,await后面的代码就不执行.一般使用trycatch去捕获不成功的情况



         promise的then方法: 

            1. then方法有两个回调函数
                1.1  当promise成功,调用第一个
                1.2  当promise失败,调用第二个
            2. 这两个回调都是微任务 
            3. then方法返回一个新的promise实例 
                这个promise实例的状态由谁决定?
                由上一次promise回调执行之后返回的结果决定的

                具体的规则: 
                    普通值就直接成功
                    又返回一个promise.这个promise的状态决定了下一次promise的状态 

               如果代码在同步回调和then的回调中执行报错了,会导致promise的状态失败了


        promise的catch方法: 

                当promise失败的时候,会调用catch
                一般使用了catch就不会在then中传入第二个参数了


        Promise.resolve() 立刻获取到成功的promise
        Promise.reject()  立刻获取到失败的promise
        Promise.all([promise对象, promise对象]) 所有promise都成功,返回的promise才成功






*/
