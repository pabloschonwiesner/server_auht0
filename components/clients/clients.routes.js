const express = require('express')
const router = express.Router()

const { requiredPermissions } = require('../../middlewares/auth')


const clientsController = require('./clients.controller')


router.get('/:id?', requiredPermissions('read:clients', 'read:client'), clientsController.getClients)
router.post('/', requiredPermissions('create:clients'), clientsController.createClient)
router.put('/', requiredPermissions('update:client'), clientsController.updateClient)
router.delete('/:id', requiredPermissions('delete:client'), clientsController.deleteClient)


module.exports = router