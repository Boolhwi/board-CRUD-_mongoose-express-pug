const mongoose = require('mongoose')
const Schema = mongoose.Schema

const qna = new Schema({
    title: String,
    contents: String
  })

module.exports = mongoose.model('QnA', qna)