const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todosSchema = new Schema({
  todoName: {
    type: String,
    required: true,
    unique: true,
  },
  isDone: {
    type: String,
    default: 'false',
  },
})

module.exports = mongoose.model('todos', todosSchema)
