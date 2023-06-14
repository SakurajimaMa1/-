const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()
const port = 8081

// 通过调用来处理post请求数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//处理跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

//设置路由
app.use(router)

//端口监听
app.listen(port, () => {
  console.log(`正在运行于：http://localhost:${port}`)
})