

const express = require('express')
const postupdateProduct = require('../controller/products/postupdateProduct')
const getAllProducts = require('../controller/products/getAllProducts')
const postupdateBatchPrice = require('../controller/products/postupdateBatchPrice')
const postreadlatestProduct  = require('../controller/products/postreadlatestProduct')
const postAddToKart = require('../controller/products/postAddToKart')
const deleteProductFromKart = require('../controller/products/deleteProductFromKart')
const postCreateTransaction = require('../model/functions/product/postCreateTransaction')
const router = express.Router()

router.post('/updateProduct',postupdateProduct)
router.post('/readAllProducts',getAllProducts)
router.post('/updateBatchPrice',postupdateBatchPrice) 
router.post('/readlatestProduct',postreadlatestProduct)
router.post('/removeFromkart',deleteProductFromKart)
router.post('/addToKart',postAddToKart)
router.post('/saveTransaction',postCreateTransaction)
 
module.exports = router