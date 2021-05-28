/*

  0-响应式

        bootstrap 

            栅格系统

                col-xs-1 
                col 表示一行中的一格, 一行应该被包裹在布局容器中
                xs 是表示屏幕像素小于 768 
                1 表示占一行中的 多少. 一行分12份, 1就是占一份

            响应式工具

                visible-xs 只有在屏幕为手机时展示
                hidden-xs 只有屏幕为手机时隐藏 

             手机 < 768     xs 
             平板  768~992   sm 
             普通pc  992 ~ 1200  md
             超大pc   > 1200  lg


  1-es5+ 

        Object的静态方法

            create  创建一个新的对象

                Object.create(原型对象, {
                    属性: {
                        value: 属性的值,
                        writeable: 是否可写 
                        enumerable: 是否可以遍历
                        configerable: 是否可以删除   三个属性默认值都是false
                    }
                })

            defineProperty   定义对象中的某个属性

                Object.defineProperty(要操作的对象, '属性名', {
                    value ... 
                })

            defineProperties 定义对象中的多个属性

             Object.defineProperties(要操作的对象,  {
                   属性名: {
                       value ...
                   }
                })

            
            defineProperty和defineProperties 共同特点: 属性有就修改,没有就添加

        getter和setter 

             let obj = {
                 set fullName(){} 用于修改fullName属性
                 get fullName(){} 用于获取fullName属性的值
             }


        json 
             作用: 用于存储数据
             优点: 体积小,可读性好

            js对象转成json字符串: JSON.stringify(js对象)
            json字符串转成js对象: JSON.parse(json字符串)
        

        数组拓展的方法(一下方法都是原型上的方法)

             forEach 遍历数组
             
             indexOf  通过元素找下标

             map   对数组的元素做同样的操作 

             filter 删除数组中的某些数据 

             every 判断数组是否都符合某个条件 

             some 判断数组中是否有一个满足条件

             reduce(function(preValue, item, index, arr){}, 初始值) 返回最后一次调用回调函数返回的结果




  2-es6

        1. 块作用域

             es6之前,js中只有函数作用域
             es6开始,js中除了函数作用域,还有块作用域 
             有 {} 的地方就是块作用域

             块作用域生效: 使用了let 或 const

        2. let 

            用来声明变量

            特点: 
               1.  不会变量提升 
               2.  必须先声明,后使用
               3.  声明的变量不会添加到window上面 
               4.  不可以重复声明

        3. const

             用来声明常量 

             常量的变量的区别: 常量不能被重新赋值, 变量可以

             特点: 
                1.  不会提升 
                2.  必须先声明,后使用
                3.  声明的变量不会添加到window上面 
                4.  不可以重复声明
                5.  一般名字要大写(可以不遵守)
                6. 如果值是对象,修改的是对象的值,就不会报错了. 只判断常量中存储的地址是否变化
                7. 声明的时候,必须初始化(赋值)
                




*/
