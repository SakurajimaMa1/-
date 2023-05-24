const express = require('express')
const controller = require('../controller')
const router = express()

// 设置路由并跳转方法
router.get('/index',controller.list)
router.get('/api/products',controller.queryAll)
router.post('/api/test',controller.queryAll)

module.exports = router