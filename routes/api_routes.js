// get route
var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.send('Hello!')
})
// define the about route
router.post('/post', function (req, res) {
  res.send('Awesome!')
})
// define the about route
router.delete('/delete', function (req, res) {
    res.send('Awesome!')
  })

module.exports = router