const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const QnA = require('./models/QnA')
const url = 'mongodb+srv://B:123321@cluster0.axyta.mongodb.net/practice'

mongoose.set('useFindAndModify', false);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

app.set('views', './views')
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(bodyParser.json())

//default ( read )

app.get('/', async function (req, res) {
  const temp = await QnA.find()
  res.render('index.pug', { target: temp })
})

app.get('/writing', async function (req, res) {
  res.render('qna.pug')
})

//create

app.post('/write', async function (req, res) {
  let temp = new QnA({
    title: req.body.title,
    contents: req.body.contents,
    password: req.body.password
  })

  const doc = await temp.save()
  res.redirect('/')
})

//update

app.post('/update', async function (req, res) {
  const temp = await QnA.findOneAndUpdate(
    {title: req.body.title, password: req.body.password},
    {
      contents: req.body.contents
    })
  res.redirect('/')
})

//read

app.post('/search', async (req, res) => {
  const temp = await QnA.find({title: { $regex: req.body.title }})
  res.render('index.pug', { target: temp })
})

// delete

app.post('/delete', async (req, res) => {
  const deleted = await QnA.findOneAndDelete({ title: req.body.title, password: req.body.password })
  res.redirect('/')
})

app.listen(3000, function () {
  console.log('listening on 3000')
})

// option
// // update ( find and save)
// const temp = await Character.findOne({ name: '' })
// temp.specials = [
//   'Hadoken',
//   'Shotempken',
//   'Tatsumaki Senpukyaku'
// ]

// const doc = await temp.save()
// console.log(doc)

// // delete

// const temp = await Character.findOne({ name: '' })
// const deleted = await temp.remove()