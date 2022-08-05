const express = require('express')
const app = express()

app.post('/login', function (req, res) {
  const testObj = {
    token: 'faiw34hf7w83hf783'
  }
  res.send(JSON.stringify(testObj))
})

module.exports = app
