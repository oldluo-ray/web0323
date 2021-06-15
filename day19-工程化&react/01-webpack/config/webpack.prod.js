const { resolve } = require('path')
// 注意: loader下载即用,不需要引入.但是插件,下载完还必须要引入
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 单独抽取css的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
  //入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'js/[name].[contenthash:8].js', // 添加了hash值, 实现静态资源的长期缓存
    path: resolve(__dirname, '../build'),
    publicPath: '/', // 所有输出资源公共路径
  },
  // 模式
  mode: 'production', // 开发环境
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
        // use:[] 质性顺序,从右往左/从下到上
        // less-loader 将less转成css
        // css-loader 将编译好的css,以commonjs的形式整合到js文件中
        // style-loader 将css以内嵌的形式加到html页面上
        // MiniCssExtractPlugin.loader  将css以外链的形式添加到页面上
        // postcss-loader 处理css兼容问题
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    }),
    new CssMinimizerPlugin({}),
  ],

  target: 'browserslist', // 处理兼容问题
}
