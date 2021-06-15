/*


 webpack是什么?

    项目的构建工具(模块打包器)


 webpack的五大核心概念?

    入口(entry) 打包代码是从哪个文件开始的 --> 文件的路径
    出口(output) 打包好的代码存放到哪个路径下
        output: {
            filename: 打包好的文件的名称
            path: 打包好的文件存放的目录
        }
    模式(mode) 
        development 开发环境
        production  生产环境 会自动压缩

    加载器(loader)
        webpack本身可以处理js和json(可以直接将js中的es6模块语法转成浏览器认识的代码),
        但是不能处理其他类型的文件(比如: 图片, css...)
        webpack本身做不了事情,需要loader帮助完成

    插件(plugins)
        
        加载器也做不了的事情,交给插件完成


    配置文件: 
        webpack.config.js 要求存放在当前项目的根目录 

        module.exports = {
            entry: '路径',
            output: {
                filename: 
                path:
            },
            mode: 'development',
            module:{
                rules: [加载器, 加载器]  注意: 加载器质性顺序,从小往上/从右往左
            },
            plugins: [插件, 插件]

        }














*/
