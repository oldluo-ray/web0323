/*

    1.jquery是什么? 
        是一个js库
    2.jquery的作用?
        提供了$函数,可以调用jquery中很多方法,让我们的代码可以更加简洁

    3.jquery的使用?
        下载: jquery.com 
        引入: 先引入,再使用

    4. $(function(){}) 回调函数何时触发?
        当页面所有的dom节点加载完毕

    5. jquery和dom之间如何相互转换?
        jquery==>dom : jquery[下标]
        dom ===> jquery:$(dom)

    6. jquery的选择器
        6.1
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
        </ul>

        如何获取<li>4</li>? 

        $('li').eq(3)

        6.2 
        <div>
            <span></span>
        </div>
        <p></p>

        通过span找父元素
            $('span').parent()

        找div的兄弟元素
           $('div').siblings() 



    7. 操作dom 

        创建 
            $('html字符串')

        添加

            append('html字符串/jquery对象/dom对象')

            prepend()
            before
            after

            html()

        清空

            html('')
            empty()

        移除

            remove() 移除自己

        克隆

            clone()  不传就是克隆当前节点和子节点
            clone(true) 传了不仅克隆节点,还克隆事件(仅限于jquery注册的事件)


    8. 操作样式

         行内:  css('属性', '值') css({属性:值,属性:值}) css('属性')返回值
         类名:  
            addClass 
            removeClass
            toggleClass 
            hasClass










*/
