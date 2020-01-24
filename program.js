const express = require('express')
const app = express()
const path = require('path');

const process = require('process')

app.use(require('stylus').middleware(process.argv[3])) 
app.use(require('stylus').middleware('public'))

app.listen(process.argv[2])