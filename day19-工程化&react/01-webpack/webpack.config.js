const { resolve } = require('path')
// 注意: loader下载即用,不需要引入.但是插件,下载完还必须要引入
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  //入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: './js/main.js', // 输出的js文件的名字
    path: resolve(__dirname, 'build'), // 输出的js文件所处的目录
    clean: true, //清除输出的目录
    assetModuleFilename: 'images/[hash:8][ext][query]', //处理图片
  },
  // 模式
  mode: 'development', // 开发环境
  // 加载器
  module: {
    // 注意: loader默认是从下往上执行
    rules: [
      // eslint 检查js语法的加载器
      {
        test: /\.js$/, // 只检测js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        enforce: 'pre', // 提前加载使用(loader默认从下往上执行, 优先执行eslint-loader)
        use: {
          // 使用eslint-loader解析
          loader: 'eslint-loader',
        },
      },
      // 利用babel,将es6+的语法,转成es6之前的语法.兼容老版本的浏览器
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // 处理less
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        // use:[] 质性顺序,从右往左/从下到上
        // less-loader 将less转成css
        // css-loader 将编译好的css,以commonjs的形式整合到js文件中
        // style-loader 将css以内嵌的形式加到html页面上
      },
      // 处理图片
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 小于8kb以下的图片会被打包成base64格式

            // base64格式的图片:
            // 优点: 1. 不会再给服务器发送请求(减少请求次数) 2. 有可能转成base64,体积会变小(一般小于8kb,并且图案不复杂才有可能变小)
            // 缺点: 解析完的base64字符串太长
          },
        },
      },
      // 处理字体图标
      {
        test: [/\.ttf$/, /\.woff$/, /\.woff2$/],
        type: 'asset/resource',
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  //自动编译打包的配置
  devServer: {
    contentBase: './build', // 打包根路径
    port: 8080, // 端口号
    open: true, // 自动打开浏览器
    progress: true, // 进度条
  },
  target: 'web', // 让浏览器自动刷新
}
