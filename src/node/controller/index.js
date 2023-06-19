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
    db.cartsProductsSum().then((row)=>{
        res.json(row)
    })
}

const getProductsIdInfo = (req, res, next)=>{
    db.getProductsIdInfo(req).then((row)=>{
        res.json(row)
    })
}

const carts = (req, res, next)=>{
    db.carts(req).then((row)=>{
        res.json(row)
    })
}

const logout = (req, res, next)=>{
    res.json(db.logout())
}

const getCarts = (req, res, next)=>{
    db.getCarts(req).then((row)=>{
        res.json(row)
    })
}

const updataProductQuantitySelected = (req, res, next)=>{
    if (req.params.id == "unSelectAll") {
        db.updataProductQuantitySelectedAll("false").then((row)=>{
            res.json(row)
        })
    } else if (req.params.id == "selectAll") {
        db.updataProductQuantitySelectedAll("true").then((row)=>{
            res.json(row)
        })
    } else {
        db.updataProductQuantitySelected(req).then((row)=>{
            res.json(row)
        })
    }
}

// const productQuantitySelectAll = (req, res, next)=>{
//     db.productQuantitySelectAll(req).then((row)=>{
//         res.json(row)
//     })
// }


const deleteCartsProduct = (req, res, next)=>{
    db.deleteCartsProduct(req).then((row)=>{
        res.json(row)
    })
}
  
module.exports = {
    list,
    queryAll,
    login,
    user,
    cartsProductsSum,
    getProductsIdInfo,
    carts,
    logout,
    getCarts,
    updataProductQuantitySelected,
    deleteCartsProduct,
    // productQuantitySelectAll
}