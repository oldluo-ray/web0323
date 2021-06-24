/*

    1. 性能优化
        1.1 减轻state 不渲染的数据不放在state中
        1.2 shouldComponentUpdate 
            调用时机: setState, 新的props, forceUpdate不会触发shouldComponentUpdate
            可以接收到最新的props和state,进行比较,如果数据发生变化,就return true, 否则return false
        1.3 纯组件PrueComponent
            自己在shouldComponentUpdate中判断每一个props和state比较繁琐,所以可以使用纯组件,进行判断. 纯组件和Component功能类似,但是封装了shouldComponentUpdate. 自动会所有的props和state进行判断
            但是: 纯组件比较的时候,是浅层对比. 所以如果是复杂数据类型,比较的是地址值

    2. 高阶组件(HOC)

            作用: 对组件中相同的状态和逻辑进行封装
            实现: 
            1. 定义一个函数,函数中返回一个组件    
            2. 将公共的状态和逻辑定义在这个组件中
            3. 在App组件中,使用的就是这个组件
            4. 要将需要数据的组件,传入到这个定义的函数中
            5. 并且在封装了数据和逻辑的组件中,使用传入的组件
            6. 再通过props将数据,传递给需要数据的组件 



    3. renderprops

            作用: 对组件中相同的状态和逻辑进行封装

            实现: 
            1. 定义一个组件
            2. 在定义的组件中封装公共的状态和逻辑
            3. 在定义的组件中的render中调用this.props.render(数据)
            4. App组件中,直接使用封装的组件
                <Position render={(data)=>{return  需要数据的组件 }}></Position>













*/
