const express = require('express')
const router = express.Router()
const { requiredPermissions } = require('../../middlewares/auth')

const productsController = require('./products.controller')

router.get('/:code?', requiredPermissions('read:products', 'read:product'), productsController.getProducts)
router.post('/', requiredPermissions('create:product'), productsController.createProduct)
router.put('/', requiredPermissions('update:product'), productsController.updateProduct)
router.delete('/:code', requiredPermissions('delete:product'), productsController.deleteProduct)


module.exports = router