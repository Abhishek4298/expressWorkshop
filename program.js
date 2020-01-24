const express = require('express')
const app = express()
const port = process.argv[2]
const fs = require('fs')

app.get('/books', function(req, res){
  const book = process.argv[3];
  fs.readFile(book, function(err, data) {
    if (err) throw err;
    const booksObj = JSON.parse(data);
    res.json(booksObj);
  })
})
app.listen(process.argv[2]);