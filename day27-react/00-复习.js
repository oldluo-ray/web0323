/*

    前端路由: 
        编程式导航: 
            history 
                push(/路径, 传递的参数) 会增加历史记录
                replace(/路径, 传递的参数) 替换历史记录
            location
                state, 用来接收push/replace传递的数据
            match
                params 用来接收路由参数

                配置路由参数: 
                    <Route path="/路径/:参数?"></Route>
                传递路由参数:
                    <Link to="/路径/参数"></Link>
                    push/replace(/路径/参数, 传递的参数)

        withRouter:
            作用: 只有被Route组件渲染的组件,才能拿到history等那三个对象, 如果在不是被Route渲染的组件中使用那三个对象,就无法获取到.可以使用withRouter拿到

            如何实现:

                withRouter(需要用到history等那三个对象的组件) 返回一个高阶组件,高阶组件和react定义的组件形成了父子关系. 高阶组件将那三个对象,通过props传递到react组件中

        嵌套路由

            在写二级路由的时候,前面要加上一级路由

    
    redux: 是一个状态管理工具(集中管理数据), 是一个js库. 可以在任何的地方使用(vue/react项目)

        作用: 
            将应用中所有的数据,集中的管理起来

        基本使用: 

            1. 创建reducer 
            function reducer(state=初始值, action){

                switch(action.type){
                    case 需求类型:
                        return {
                            ...state,
                            属性:值
                        }
                    default: 
                        return state
                }

            }
            2. 创建store
                import {createStore} from 'redux'
                const store = createStore(reducer) // reducer函数被调用一次,用来初始化数据
                store.dispatch({type: '需求类型'}) //reducer函数还会被调用,用来修改数据
                store.getState() //可以用来获取数据

        在react中使用redux
            因为redux是独立的.如果要在react中使用redux,就需要用到一个包 react-redux 
            用这个包将react和redux关联起来
            关联关系:1. react中要使用redux的数据 2. react中要修改redux的数据
            使用: 
                1. 在App.js/index.js中导入Provider组件,用Provider组件包裹整个应用结构. Provider只使用一次. 注意: 必须要在Provider上面写一个store属性,store属性的值就是redux的store对象

                2. 在需要用到redux数据的组件中, 导入connect 
                import {connect} from 'react-redux'
                调用connect
                connect()(需要用到redux数据的react组件) 返回一个高阶组件,在App中直接使用高阶组件
                如果第一次connect调用什么都没有传, 那么在react组件中,就可以通过props,获取到一个dispatch方法,这个dispatch就是redux中store的dispatch.可以用来修改redux的数据. 但是此时无法获取到redux中的数据
                
                如果要获取redux数据,就需要定义一个函数
                // 在connect函数执行的时候,会调用一次,为了一开始就将redux数据,传递给react组件.  后面redux的数据发生变化了, mapStateToProps还会被调用.用来将最新的数据,传递给react
                function mapStateToProps(state){
                    return {
                        属性: 值
                    }
                }
                connect(mapStateToProps)(react组件) 这样写, react组件,就可以接收到mapStateToProps中返回的对象的属性和值.并且还有dispatch










*/
