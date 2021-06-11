// 书写配置gulp的代码
const gulp = require('gulp')
// 引入插件:
// jshint用来检查js代码是否符合规范
const jshint = require('gulp-jshint')
// 将es6模块化的代码,编译成commonjs
const babel = require('gulp-babel')
// 将commonjs转成浏览器认识的代码
const browserify = require('gulp-browserify')
// 给文件重命名的插件
const rename = require('gulp-rename')
// 将编译好的js代码,进行压缩(去掉注释,空格...)和混淆(username=>x)
const uglify = require('gulp-uglify')
// 将less编译成css
const less = require('gulp-less')
// 处理css兼容问题,添加前缀
const LessAutoprefix = require('less-plugin-autoprefix')
// 处理css,需要new实例
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] }) // 所有内核的浏览器往前兼
// 合并文件的插件(可以合并css/js/ 但是这里主要用来合并css. 因为js在编译的时候,已经被合并了)
const concat = require('gulp-concat')
// 压缩css
const cssmin = require('gulp-cssmin')
// 压缩html
const htmlmin = require('gulp-htmlmin')
// 引入自动化的插件
const livereload = require('gulp-livereload')
const connect = require('gulp-connect')
const opn = require('opn')

// 定义任务
// gulp.task('test', async () => {
//   console.log('执行了test任务')
//   //   return 流对象
// })
// 注意: default是一个gulp中的默认任务. 执行时 只写了gulp 后面没有跟任务名,就自动找到default任务执行
// gulp.task('default', async () => {
//   console.log('执行了默认任务')
// })

//处理js
gulp.task('jshint', function () {
  // 将你的任务的任务代码放在这
  return gulp
    .src('./src/js/*.js')
    .pipe(
      jshint({
        esversion: 6, //使用es6语法,
        asi: true, //可以不添加分号
        eqeqeq: true, // 必须使用 全等===
      })
    )
    .pipe(jshint.reporter('default')) // gulp插件中查看
    .pipe(livereload())
})

gulp.task('babel', () =>
  gulp
    .src('./src/js/*.js')
    .pipe(
      babel({
        //进行语法转换
        presets: ['@babel/env'],
      })
    )
    .pipe(gulp.dest('build/js')) //输出到指定目录
    .pipe(livereload())
)

gulp.task('browserify', function () {
  return gulp
    .src('./build/js/app.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法. browserify可以将多个js合并成一个js
    .pipe(rename('built.js')) //为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js')) //输出到指定位置
    .pipe(livereload())
})

gulp.task('uglify', function () {
  return gulp
    .src('build/js/built.js')
    .pipe(uglify()) //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
})

//处理css
gulp.task('less', function () {
  return gulp
    .src('./src/less/*.less')
    .pipe(
      less({
        plugins: [autoprefix], //自动扩展前缀
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 合并css
gulp.task('concat', function () {
  return gulp
    .src('./build/css/*.css')
    .pipe(concat('built.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})
// 压缩
gulp.task('cssmin', function () {
  return gulp
    .src('build/css/built.css')
    .pipe(cssmin())
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
})

// 压缩html
gulp.task('htmlmin', () => {
  return gulp
    .src('src/index.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true, //去除空格
        removeComments: true, //去除注释
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})

//自动执行任务，编译代码
gulp.task('watch', function () {
  //1. 在所有可能要执行任务后面加上 .pipe(livereload());
  //2. 配置watch任务
  livereload.listen()
  //通过自己服务器打开项目，自动刷新
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true, // 自动刷新
  })
  //自动打开浏览器
  opn('http://localhost:3000/index.html')
  //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
  gulp.watch('src/less/*.less', gulp.series(['less', 'concat', 'cssmin']))
  gulp.watch(
    './src/js/*.js',
    gulp.series(['jshint', 'babel', 'browserify', 'uglify'])
  )
  gulp.watch('./src/index.html', gulp.series('htmlmin'))
})

// 执行了default任务,会按照series里面书写的顺序,依次执行对应的任务(方便)
gulp.task(
  'default',
  gulp.series(
    'jshint',
    'babel',
    'browserify',
    'uglify',
    'less',
    'concat',
    'cssmin',
    'htmlmin',
    'watch'
  )
)
