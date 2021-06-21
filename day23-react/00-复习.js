/*


    生命周期钩子函数: 

            创建: 
                constructor  一次
                render 
                componentDidMount 一次
            更新
                render 
                componentDidUpdate  多次
            卸载
                componentWilunmount  一次


    组件之间传递数据的方式: 


            props
            context 
            pubsub-js

            相同点: 都是用来在组件之间传递数据的

            不同点: 
                1. props和context都要求组件有嵌套关系,pubsub-js不需要
                2. props必须是一级一级的传递, context可以跨级传递. pubsub-js 随意传
                3. props和context是react内置的. pubsub-js是第三方的包 



    context的基本使用: 

          创建context对象 要保证是同一个对象   React.createContext('默认值')
           注意: 默认值在不写provider的时候生效
          在提供数据的组件中,写Provider value属性的值就是要传递的数据
          在需要得到数据的组件中,
            1. <Consumer>{data=>jsx}</Consumer>
            2. 添加静态属性 static contextType = context对象
                this.context 获取到值



    pubsub-js的使用: 

        1. 下载 npm i pubsub-js 
        2. 引入 import PubSub from 'pubsub-js'
        3. 在需要传递数据的组件中 PubSub.publish('话题', 值)
        4. 接收数据的组件中 组件挂载成功之后,订阅 PubSub.subscribe('话题', (话题, 数据)=>{

        })










*/
