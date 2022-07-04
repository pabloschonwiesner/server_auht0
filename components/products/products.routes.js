const express = require('express')
const router = express.Router()

const { verificaToken } = require('../../middlewares/auth')


const productsController = require('./products.controller')

router.get('/:id?', productsController.getProducts)
router.post('/', productsController.createProduct)
router.put('/', productsController.updateProduct)
router.delete('/:id', productsController.deleteProduct)


module.exports = router