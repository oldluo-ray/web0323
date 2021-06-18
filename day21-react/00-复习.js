/*
    1. 操作样式

           行内 style={{color: '', fontSize: 18}} 可以忽略单位, 属性写成小驼峰
           类名 className

    2. 注册事件

            标签属性的位置上 直接写on+事件名 = {事件处理函数}  小驼峰
            注意点: 
                1. 事件对象叫做合成事件, react做了兼容性处理
                2. 阻止默认行为,推荐使用e.preventDefault()

    3. 组件

            类组件
                class Test extends React.Component{
                    render(){
                        return jsx
                    }
                }

            函数组件
                function Test(){
                    return jsx
                }

            使用组件: 
                <Test></Test>
                <Test />

    4. 组件的状态
            
            class Test extends React.Component{
                constructor(){
                    super()
                    this.state = {
                        属性: 值
                    }
                }

                state = {}
                render(){
                    return <div>{this.state.属性}</div>
                }

                // 添加到实例上
                fn = () =>{
                    //注意: 千万不要直接修改state的值. 应该使用setState 
                    setState的两个作用: 1. 修改数据 2. 更新视图
                    this.setState({
                        属性: 值
                    })
                }

                // 添加到原型上
                fn(){}
            }


        关于事件处理函数中this指向的问题: 

            原因: 代码被babel编译过,所以默认执行了undefined 
            解决: 
                1. 箭头函数调用 () => { this.fn() }
                2. bind方法  在构造器中 this.fn = this.fn.bind(this)
                3. 类的实例方法: fn = () => {}



*/
