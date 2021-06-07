const mongoose = require('mongoose')

// 创建Schema对象

const Schema = mongoose.Schema

const lrSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: 'lr',
  }
)
module.exports = mongoose.model('lr', lrSchema)
