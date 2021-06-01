const mongoose = require('mongoose')

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
module.exports = modelObj