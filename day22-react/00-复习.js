/*

    props 

        作用: 组件之间传递数据(组件接收外部数据)
        注意点: 
            1. props只读,不能修改值
            2. 可以接收任何类型的数据
            3. 在构造器中无法直接通过this.props获取
        使用: 
            传:  <Test 属性名={值}/>
            接收: 类组件     this.props
                  函数组件   形参props


        应用: 
            父传子: 直接props传递
            子传父: 父组件给子组件传递函数, 子组件调用函数将数据当成实参,传给父组件
            兄弟传参: 状态提升


    表单操作:

        受控组件: 表单项的值被组件的状态控制

            <input type="text" value={this.state.xxx} onChange={}/>


        非受控组件: 直接操作dom

            1. 创建ref对象  this.xxxRef = React.createRef()
            2. 绑定ref和react元素   <input type="text"  ref={this.xxxRef}/>
            3. 获取真实dom  this.xxxRef.current






*/
