const express = require('express')
const cors = require('cors')
require('./services/utils/env')
const { error404, generalErrorHandler, auth0Error } = require('./middlewares/errors')
const { checkJwt, decodeJsonWebToken } = require('./middlewares/auth')
const indexRoutes = require('./routes')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(checkJwt)
app.use(decodeJsonWebToken)
app.use(auth0Error)

app.use('/api', indexRoutes)

app.use(error404)
app.use(generalErrorHandler)



module.exports = app