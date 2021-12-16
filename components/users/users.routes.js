const express = require('express')
const router = express.Router()

const { verificaToken } = require('../../middlewares/auth')


const userController = require('./users.controller')

router.get('/:id?', userController.getUsers)
router.post('/', userController.createUser)
router.put('/', userController.updateUser)
router.delete('/', userController.deleteUser)
router.post('/login', userController.loginUser)


module.exports = router