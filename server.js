const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
//npm run savage starts server

MongoClient.connect('mongodb://listy:list1234@ds213239.mlab.com:13239/students', (err, database) => {
  if (err) return console.log(err)
  var db = client.db("students")
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  var cursor = db.collection('students').find()
  cursor.toArray(function(err, result){
    if (err) return console.log(err)
    res.render('index.ejs', {students: result})
    console.log(result)
  })
})

app.post('/students', (req, res) => {
  db.collection('students').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

})







//thumbs down would be in this area. seperate put request needed. add thumbs down endpoint
// app.put('/thumbUp', (req, res) => {
//   db.collection('messages')
//   .findOneAndUpdate({onTime: req.body.onTime, late: req.body.late, all: req.body.all}, {       late: req.body.late
//     $set: {
//       thumbUp:req.body.thumbUp + 1
//     }
//   }, {
//     sort: {_id: -1},
//     upsert: true
//   }, (err, result) => {
//     if (err) return res.send(err)
//     res.send(result)
//   })
// })
//
// app.put('/thumbDown', (req, res) => {
//   db.collection('messages')
//   .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
//     $set: {
//       thumbDown:req.body.thumbDown + 1
//     }
//   }, {
//     sort: {_id: -1},
//     upsert: true
//   }, (err, result) => {
//     if (err) return res.send(err)
//     res.send(result)
//   })
// })

// app.delete('/attendance', (req, res) => {
//   db.collection('attend').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
//     if (err) return res.send(500, err)
//     res.send('Message deleted!')
//   })
// })
