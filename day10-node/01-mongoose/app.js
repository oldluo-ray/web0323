;(async function () {
  // 1. 引入mongoose
  const mongoose = require('mongoose')

  try {
    // 2. 连接数据库
    await mongoose.connect('mongodb://127.0.0.1:27017/web0323mgs', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    // 3. 这里的代码可以执行表示数据库连接成功
    console.log('数据库连接成功')

    // 4. 创建约束对象(Schema)
    // 4.1 获取Schema构造函数
    const Schema = mongoose.Schema
    // 4.2 创建Schema对象
    const schemaObj = new Schema(
      {
        username: {
          type: String,
          required: true,
        },

        age: {
          type: Number,
          required: true,
        },

        gender: {
          type: String,
          required: true,
        },

        info: {
          type: Schema.Types.Mixed,
          default: '暂无',
        },

        register_date: {
          type: Date,
          default: Date.now(),
        },
      },
      // 如果协商new Schema的第二个参数,就可以指定集合名叫什么,就不会自动加s了
      { collection: 'user' }
    )

    // 5. 创建model对象(集合)

    // const modelObj = mongoose.model(集合名, Schema对象)
    // 注意: 如果集合名没有s,mongoose会自动加s
    const modelObj = mongoose.model('user', schemaObj)

    // 6. 利用model对象,对数据库进行增删改查
    // 添加
    // const promiseObj = modelObj.create(
    //   {
    //     username: 'ls',
    //     age: '18',
    //     gender: '女',
    //   },
    //   (err, data) => {
    //     console.log(err, data)
    //   }
    // )
    // 增删改查的所有方法,如果不传回调函数.则返回的结果都是promise对象,操作成功,就是成功的promise. 操作失败,就是失败的promise
    const promiseObj = modelObj.create({
      username: 'ls',
      age: '18',
      gender: '女',
    })
    console.log(promiseObj, 'asfadafdsfaf')

    // 查找
    // find 不管查找到多少,返回永远是一个数组. 即便是没找到,也是一个空数组
    // findOne 找到了就返回符合条件的第一条文档对象, 没找到就是null
    // modelObj.find({ age: 50 }, { username: 1, _id: 0 }, (err, data) => {
    //   console.log(err, data)
    // })
    // modelObj.findOne({ age: 18 }, { username: 1, _id: 0 }, (err, data) => {
    //   console.log(err, data)
    // })

    // 修改
    // updateOne 只改一条
    // updateMany 修改符合条件的所有
    // modelObj.updateOne({ age: 18 }, { $set: { info: '成年' } }, (err, data) => {
    //   console.log(err, data)
    // })
    // modelObj.updateMany(
    //   { age: { $lt: 18 } },
    //   { $set: { info: '未成年' } },
    //   (err, data) => {
    //     console.log(err, data)
    //   }
    // )

    // 删除
    // modelObj.deleteOne({ age: { $lt: 18 } }, (err, data) => {
    //   console.log(err, data)
    // })
    // modelObj.deleteMany({ age: { $lt: 20 } }, (err, data) => {
    //   console.log(err, data)
    // })
  } catch (error) {
    // 如果数据库连接失败,或数据库连接成功之后,后面的代码出现错误,都会进入到这个catch中
    console.log(error)
  }
})()
