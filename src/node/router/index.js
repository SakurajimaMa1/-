const express = require('express')
const controller = require('../controller')
const router = express()

// 设置路由并跳转方法
router.get('/index',controller.list)
router.get('/api/products',controller.queryAll)
router.post('/api/test',controller.queryAll)
router.post('/api/user/login',controller.login)
router.get('/api/user',controller.user)
router.get('/api/carts/products/sum',controller.cartsProductsSum)

module.exports = router