const express = require('express')
const controller = require('../controller')
const router = express()

// 设置路由并跳转方法
router.get('/index',controller.list)
router.get('/api/products',controller.queryAll)
router.get('/api/user',controller.user)
router.get('/api/carts/products/sum',controller.cartsProductsSum)
router.get('/api/products/:id',controller.getProductsIdInfo)
router.get('/api/carts',controller.getCarts)

router.post('/api/test',controller.queryAll)
router.post('/api/user/login',controller.login)
router.post('/api/carts',controller.carts)
router.post('/api/user/logout',controller.logout)

router.put('/api/carts/:id',controller.updataProductQuantitySelected)
// router.put('/api/carts/selectAll',controller.productQuantitySelectAll)
// router.put('/api/carts/unSelectAll',controller.productQuantitySelectAll)

router.delete('/api/carts/:id',controller.deleteCartsProduct)

module.exports = router