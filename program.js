const express = require('express')
const app = express()
const port = process.argv[2]

app.get('/home',function(req,res){
  res.end('Hello World!')
 app.use(express.static('public'))
});
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(port)