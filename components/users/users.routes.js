const express = require('express')
const router = express.Router()

const { verificaToken } = require('../../middlewares/auth')


const userController = require('./users.controller')

router.get('/:id?', userController.getUsers)


module.exports = router