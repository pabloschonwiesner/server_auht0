const express = require('express')
// const path = require('path')
// const app = require('./../app')

const clients = require('../components/clients/clients.routes')
const products = require('../components/products/products.routes')

const router = express.Router()



router.use('/clients', clients)
router.use('/products', products)

module.exports = router