const mongoose = require('mongoose')
const express = require('express')
const app = express()
const Character = require('./models/Character')
const url = 'mongodb+srv://B:123321@cluster0.axyta.mongodb.net/practice'

mongoose.set('useFindAndModify', false);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

app.set('views', './views')
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(bodyParser.json())

// create
app.get('/', function (req, res) {
  db.collection('pop_music_chart').find().toArray()
      .then(results => {
          res.render('index.pug', { target: results })
      })
      .catch(error => console.error(error))

})

app.post('/create', (req, res) => {
  let temp = {
      title: req.body.title,
      artist: req.body.artist,
      like: 0
  }

  pmc_collection.insertOne(temp)
      .then(result => {
          res.redirect('/')
      })
      .catch(error => console.error(error))
})

app.post('/search_title', (req, res) => {
  db.collection('pop_music_chart').find({ title: req.body.title }).toArray()
      .then(results => {
          res.render('index.pug', { target: results })
      })
      .catch(error => console.error(error))
})

app.post('/search_artist', (req, res) => {
  db.collection('pop_music_chart').find({ artist: req.body.artist }).toArray()
      .then(results => {
          res.render('index.pug', { target: results })
      })
      .catch(error => console.error(error))
})

app.post('/like', (req, res) => {
  pmc_collection.findOne(
      {
          title: req.body.title
      })
      .then(results => {
          pmc_collection.updateOne({
              title: req.body.title
          }, {
              $set: {
                  like: ++results.like
              }
          })
              .then(result => {
                  res.redirect('/')
              })
              .catch(error => console.error(error))
      })
      .catch(error => console.error(error))
})

app.post('/delete', (req, res) => {
  pmc_collection.deleteOne(
      { title: req.body.title }
  )
      .then(result => {
          if (result.deletedCount === 0) {
              return res.json('No music to delete')
          }
          res.json(req.body.title + ` Deleted`)
      })
      .catch(error => console.error(error))
})

app.listen(3000, function () {
  console.log('listening on 3000')
}
// async function runCode() {
//   const ryu = new Character({
//     name: 'LEE',
//     specials: ['Bomb', 'it like a boom boom'],
//     ultimate: 'ANS'
//   })

//   const doc = await ryu.save()
//   console.log(doc)
// }

// runCode()
//   .catch(error => { console.error(error) })

// update

// async function runCode() {
//   const doc = await Character.findOneAndUpdate(
//     { name: 'gayeon'},
//     {
//       specials: [
//         'kindness',
//         'sweet',
//         'pure'
//       ]
//     })

//   console.log(doc)
// }

// runCode()
//   .catch(error => { console.error(error) })

// // find
// async function runCode() {
//   const ryu = await Character.findOne({ name: 'Ryu' })
//   console.log(ryu)
// }
// runCode()
//   .catch(error => { console.error(error) })

// // update ( find and save)
// const ryu = await Character.findOne({ name: 'Ryu' })
// ryu.specials = [s
//   'Hadoken',
//   'Shoryuken',
//   'Tatsumaki Senpukyaku'
// ]

// const doc = await ryu.save()
// console.log(doc)

// // delete

// const ryu = await Character.findOne({ name: 'Ryu' })
// const deleted = await ryu.remove()

// // delete
async function runCode() {
  const deleted = await Character.findOneAndDelete({ name: 'Ryu' })
}

runCode()
  .catch(error => { console.error(error) })