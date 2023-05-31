const db = require('../db')


const list = (req,res,next)=>{
    res.json([
      {name: 'bob',age: 18},
      {name: 'jerry',age: 19}
    ])
}

const queryAll = (req, res, next)=>{
    db.queryAll().then((row)=>{
        res.json(row)
    })
}

const login = (req, res, next)=>{
    db.login(req).then((row)=>{
        res.json(row)
    })
}

const user = (req, res, next)=>{
    res.json(db.user())
}

const cartsProductsSum = (req, res, next)=>{
    res.json(db.cartsProductsSum())
}
  
module.exports = {
    list: list,
    queryAll: queryAll,
    login: login,
    user: user,
    cartsProductsSum: cartsProductsSum
}