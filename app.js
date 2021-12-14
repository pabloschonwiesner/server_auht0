const express = require('express')
const path = require('path')
const cors = require('cors')
require('./services/utils/env')
const { error404, generalErrorHandler } = require('./middlewares/errors')
const indexRoutes = require('./routes')

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/public', express.static(path.join(__dirname,"/public/"))); 


app.get('/', function(req,res) {
  res.sendFile('index.html', { root: path.join(__dirname, '/public/') });   
});
app.use('/', indexRoutes)

app.use(error404)
app.use(generalErrorHandler)


module.exports = app