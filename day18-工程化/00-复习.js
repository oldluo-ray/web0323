/*

    1. formdata

            用来管理表单的对象(在ajax中,也可以用来上传文件)

            如有要管理表单: const formdata = new FromData(form的dom对象)
            额外的添加数据: formdata.append('键', '值')

            不管理表单:const formdata = new FormData()
            添加数据 formdata.append('键','值')

            formdata配合ajax使用

            xhr.send(formdata)
            需要注意: 只能使用post请求,并且不需要设置content-type. 因为浏览器会自动添加

    2. axios

            axios({
                method: 请求方式,
                url: 请求地址
                params: get请求上传参数的方式 
                data: post/put/delete 上传参数的方式
            })
            返回一个promise

    3. 模块化

         解决了什么问题?

            1. 全局变量污染
            2. 私有化数据
            3. 模块之间的依赖问题    

         有哪些模块化规范: 

            commonjs  nodejs
            AMD       require.js  依赖前置
            CMD       sea.js      依赖就近
            ES6       浏览器不认识, 需要使用babel将es6模块化语法转成commonjs. 再通过browserify将commonjs转成浏览器认识的

         es6模块化的使用: 

            导出: 

                分别 
                    export 语句 可以写多次
                统一    
                    export {变量,常量, 函数名} 可以写多次 
                默认
                    export default 字面量,变量,常量,函数名 只能写一次
                
                但是,一个模块中,可以同时存在三种导出方式

            导入: 

                import 变量名, {变量名 as 重命名} from '自定义模块的路径/第三方模块名'
















*/
