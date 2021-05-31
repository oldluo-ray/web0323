/*

    node是什么

        node是一个运行js的平台


    如何在node平台上执行一个js文件

        myProject/src/js/app.js  

        打开了命令行窗口: .... /myProject>  

        1. cd 进入到js路径下. node app.js 
        2. 在myProject路径下  node src/js/app.js


    在node中如何引入一个js文件,以及如何导出

        node中默认实现了commonjs 

        导入: 

            require('') 
             1. 如果引入的是一个自定义的js文件, 需要些路径
             2. 如果引入的是一个第三方的模块, 直接写模块名
             3. 如果引入的是内置的模块, 直接写模块名 
             可以忽略后缀名.js

             返回的是对应模块,导出的结果. 并且当引入一个模块的时候,这个模块就会被执行

        导出: 

            module.exports = exports = {}

            module.exports 和 exports 都可以用来导出代码 

            但是当他们指向不同的时候,就以module.exports 为准 


    npm是什么?npm由哪些组成?
        npm 是一个包管理工具, 用来帮助我们下载,移除,搜索包 

        npm包括两部分: 1. 一个工具  2. 网站

    npm常用的指令

        初始化一个包: npm init -y   包名不能有中文,有大写, 和其他包重名 

            package.json 
                dependencies:  记录了生产环境下依赖的包  最终会打包
                devDependencies:  记录了开发环境下依赖的包 最终不会打包

        下载包:

            npm i 包名   下载指定包的最新版本

            npm i 包名@x.x.x 下载指定包的指定版本

            npm i 包名 包名 包名  同时下载多个包 


            npm i 包名 -D/--save-dev 将包下载到开发环境 
            npm i 包名 --save 下载到生产环境, 不写--save也是下载到生产环境 


            npm i 包名 -g  下载到全局


            全局包: 下载到了c盘的一个指定路径. (不是js库, 而是工具 cnpm, yarn, apidoc...)
            本地包: 在当前项目的node_modules文件夹中 (其实就是一些js文件)


            npm i  根据package.json和package-lock.json 下载当前项目的所有的依赖包时 


            package.json和package-lock.json的区别: 

                package.json中只记录了我们开发中自己下载的包. 并且信息相对简单

                package-lock.json中还记录了我们下载的包的依赖包,并且有详细的信息(下载地址.指定的版本号)












*/
