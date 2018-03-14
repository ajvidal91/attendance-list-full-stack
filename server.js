



const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
//npm run savage starts server

var db

MongoClient.connect('mongodb://listy:list1234@ds213239.mlab.com:13239/students', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('students').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {students: result})
  })
})

app.post('/students', (req, res) => {
  db.collection('students').save({name: req.body.name, status: req.body.status}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
