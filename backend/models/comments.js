const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  comment_id: {
    type: Number,
    require: true,
    unique: true,
  },
  user_id: {
    type: Number,
    require: true,
  },
  definition_id: {
    type: Number,
    require: true,
  },
  input: {
    type: String,
    require: true,
  },
})

module.exports = Comments = mongoose.model('comments', CommentSchema)
