/*

 1. 解构赋值

      let arr = [1,2,3]

      let [a, b, c] = arr


      let obj = {name: 'zs', age: 18}

      let {name: e, age: f} = obj


 2. 模板字符串

        特点: 1. 可以换行  2. 可以插入js表达式


        表达式: 变量, 常量, 运算, 字面量 

        ``



 3. 数组的拓展

        展开数组

            let arr = [1,2,3]

            let newArr = [...arr]


        数组的新的方法

            可以将伪数组转成数组: Array.from 

            根据条件找到数组中符合条件的元素: find
            根据条件找到数组中符合条件的元素的下标: findIndex 

            判断数组中是否包含指定元素: includes


4.  函数的拓展

        默认值:  funciton fn(a = 1, b){} 不传或传入undefined的时候生效


        箭头函数: 

            let fn = () => {}
            特点: 1. 没有this 2. 没有arguments 3. 不能当做构造函数

            简写: 
                如果只有一个参数, 不写小括号 . 没有参数或多个参数必须写小括号
                如果函数体只有一行, 可以忽略大括号,并且自动添加return 


5. 对象的拓展 
        展开对象

            ...obj

        对象简写

            let obj = {name: name, age: age} 
            let obj = {name, age}

6. set和map 
        是新增的数据结构 
            set类似于数组,值不能重复
            可以用来实现数组/字符串的去重

            map类似于对象 

        去重数组: [...new Set(数组)]
        去重字符串: [...new Set(字符串)].join('')

7. 类 

        class 是构造函数的语法糖 

        定义一个类, Person类, 实例上要有name属性. 原型上要有say方法

        class Person{

            constructor(name){
                this.name = name
            }

            say(){

            }

        }

        要定义一个学生类, 要有name(实例),也要有say(原型上). 属性(test)在原型上

        class Student extends Person {
           test: '值'
        }

















*/
