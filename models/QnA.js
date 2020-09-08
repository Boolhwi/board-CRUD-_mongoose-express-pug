const mongoose = require('mongoose')
const Schema = mongoose.Schema

const qna = new Schema({
    title: {type: String, unique: true},
    contents: String,
    password: String
  })

module.exports = mongoose.model('QnA', qna)