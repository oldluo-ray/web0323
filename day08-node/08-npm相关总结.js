/*

    npm 有两部分组成: 
    1. npm工具,用来管理包 
    2. npm网站.用来托管npm中的包信息

    包: 本质上其实就是一个项目文件夹(要求至少有一个package.json)
    package.json记录了当前包的信息 

    如果在项目中想要通过npm下载依赖包,需要先将自己的项目初始化成一个包

    npm init 需要我们手动输入包信息
    npm init -y 直接成功一个package.json 
    注意: 使用npm init -y 会默认使用文件夹的名称作为包的名称 
    1. 包名不能有中文
    2. 包名不能有大写字母
    3. 包名不能和其他的包名重复(就无法就下载指定的依赖了)

    下载包: 
    npm install / i 包名  下载最新版本的包
    npm install / i 包名@x.x.x  下载指定版本的包
    npm install / i 包名@x.x.x --save  下载指定版本的包到生产环境
    当最终代码写完之后,打包的时候就会将下载下来的生产环境包也打包进去
    npm install / i 包名@x.x.x --save-dev/-D 下载指定版本的包到开发环境下
    开发环境下的包,在最终打包的时候,是不会打包进去

    开发环境的包: 会记录到devDependencies中
    生产环境的包: 会记录到dependencies中
    这两个属性都记录在package.json中


    本地包: 项目中依赖的一些js库,就是本地包,需要下载到项目中的node_modules中
    本地包下载的时候,要注意路径,路径要在当前项目根目录下

    全局包: 并是不项目中依赖的js库,而是开发的时候,可能要用到的一些工具(类似于node,npm) npm i/install 包名 -g
    全局包下载不需要关心下载时的路径,因为不管在哪下载,都会出现在c盘指定路径下


    npm remove 包名 移除包(推荐)


    npm i/install  会根据package.json或package-lock.json去找到当前项目中所有的依赖包,然后一次性下载下来


    可以同时下载多个包
    npm i / install 包名 包名@x.x.x 包名


    package-lock.json和package.json的区别: 

    1. package.json 只是简单记录了依赖包的信息
        比如: 有包名, 有包的版本号(只固定了大版本)
    2.  package-lock.json 指定了版本,指定了下载地址.并且记录了依赖包所依赖的其他包的信息
    注意: 目前还是主要以package.json为主



查阅资料得知，
自npm 5.0版本发布以来，npm i的规则发生了三次变化。
1、npm 5.0.x 版本，不管package.json怎么变，npm i 时都会根据lock文件下载.但是有开发者控诉了这个问题.然后就导致了5.1.0的问题...
2、5.1.0版本后 npm install 会无视lock文件 去下载最新的npm 然后又有人提出控诉问题，最后演变成5.4.2版本后的规则。
3、5.4.2版本后,如果改了package.json，且package.json和lock文件不同，那么执行`npm i`时npm会根据package中的版本号以及语义含义去下载最新的包，并更新至lock。如果两者是同一状态，那么执行`npm i `都会根据lock下载，不会理会package实际包的版本是否有新。

*/
