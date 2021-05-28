/*

    1. 动画
     1.1 内置动画
        show/hide/toggle 
        slideDown/slideUp/slideToggle 
        fadeIn/fadeOut/fadeToggle 

        参数: 动画执行时间, 动画执行方式, 回调函数 

     1.2 自定义动画

        animate(对象, 动画执行时间, 动画执行方式, 回调函数)
        对象里面可以填写的属性,值应该是指为数字的

     1.3 动画队列
            给同一个元素,添加了多个动画,当前元素会持有一个动画队列,让动画依次执行

     1.4 停止动画
            stop(是否清空动画队列, 是否跳到当前动画的最终效果)

    2. 操作属性

        attr() 用于操作任何属性
        prop() 用于操作值为布尔值的属性

    3. 操作文本和内容

        val() 用于操作表单项
        text() 操作文本
        html() 操作标签

    4. 操作尺寸
        
        content : width()/height() 

        content + padding + border :outerWidth()/outerHeight()

        content + padding: innerWidth() / innerHeight() 

         content + padding + border + margin :outerWidth(true)/outerHeight(true)



    5.  操作坐标

        要获取当前元素距离文档的偏移量: 

            offset() ==>  {left: xxx, top: xxx} 

            offset({
                left: xxx
                top: xxx
            })
            注意: 如果没有定位,会自定加上相对定位

        
        获取距离定位父元素的偏移量: 
            position()

            position不能设置


        scrollLeft, scrollTop 
            作用: 元素内容左侧或顶部滚动出去的距离












*/
