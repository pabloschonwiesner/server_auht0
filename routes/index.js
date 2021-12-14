const express = require('express')
const path = require('path')
const app = require('./../app')

const users = require('../components/users/users.routes')

const router = express.Router()



router.use('/users', users)

module.exports = router