const express = require('express')
const router = express.Router()

const { verificaToken } = require('../../middlewares/auth')


const clientsController = require('./clients.controller')

router.get('/:id?', clientsController.getClients)
router.post('/', clientsController.createClient)
router.put('/', clientsController.updateClient)
router.delete('/:id', clientsController.deleteClient)


module.exports = router