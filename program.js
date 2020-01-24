const express = require('express')
const app = express()
const port = process.argv[2]

app.get('/search', function (req,res) {
  const obj = req.query;
  res.send(obj);
}) 
app.listen(port)