const express = require('express')
const controller = require('../controller')
const router = express()

// 设置路由并跳转方法
router.get('/index', controller.list)
router.get('/api/products', controller.queryAll)
router.get('/api/products/:id', controller.getProductsIdInfo)
router.get('/api/user', controller.user)
router.get('/api/carts/products/sum', controller.cartsProductsSum)
router.get('/api/carts', controller.getCarts)
router.get('/api/shippings', controller.getShippings)
router.get('/api/orders/:id', controller.getOrderDetails)
router.get('/api/orders', controller.getOrders)

router.post('/api/test', controller.queryAll)
router.post('/api/user/login', controller.login)
router.post('/api/carts', controller.carts)
router.post('/api/user/logout', controller.logout)
router.post('/api/shippings', controller.shippings)
router.post('/api/orders', controller.orders)
router.post('/api/pay', controller.pay)

router.put('/api/carts/:id', controller.updataProductQuantitySelected)
router.put('/api/shippings/:id', controller.updataAddress)


router.delete('/api/carts/:id', controller.deleteCartsProduct)
router.delete('/api/shippings/:id', controller.deleteAddress)

module.exports = router