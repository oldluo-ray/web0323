/*

    1. jquery注册事件

          on('事件名 事件名', '事件委托子元素选择器', 回调函数)
          off()

    2. 触发事件 
            点击事件触发: 
                dom.onclick()
                dom.click()

            jquery: 
                trigger() 触发,冒泡
                triggerHandler() 触发不冒泡

    3. 返回上一个jquery对象
            end()

    4. 遍历jquery对象中的dom对象
          each(function(index,element){})

    5. 多库共存
         1. jquery覆盖了其他库的$ 使用jQuery 
         2. 其他库的$被覆盖了 让jquery释放$ $.noconflict()

    6. jquery插件
            $.fn 指向jquery的原型

 */
