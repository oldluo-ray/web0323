/*

    mongoose 

        1. 下载,引入 
        2. 连接数据库
                mongoose.connect('mongodb://127.0.0.1:27017/数据库名')
        3. 创建Schema对象
                new mongoose.Schema({})
        4. 创建model对象
                mongoose.model('集合名',schema对象)
        5. CRUD
                create 
                find()   返回的是数组
                findOne()  文档对象,没有null
                updateOne
                updateMany 
                deleteOne
                deleteMany

    express搭建路由

            1. 下载,引入  express
            2. 创建应用对象
                const app = express()
            3. 定义路由
                app.get('/路径:路由参数?',回调函数)
                app.post('/路径:路由参数?',回调函数)
            4. 开启服务器
                app.listen(端口号, 回调)


            请求对象

                    获取get请求通过查询字符串传递过来的数据?
                        request.query 
                    获取路由参数: 
                        request.params


            响应对象

                 重定向:
                    response.redirect('地址')

                 响应字符串: 

                    response.send()


                 响应下载:

                    response.download()


                 响应文件打开:
                    注意: 只能写绝对路径 一般会配合path模块的resolve和__dirname
                    response.sendFile()





*/
