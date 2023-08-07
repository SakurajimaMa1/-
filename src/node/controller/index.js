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

const shippings = (req, res, next)=>{
    db.shippings(req).then((row)=>{
        res.json(row)
    })
    // res.json(db.shippings(req));
}

const getShippings = (req, res, next)=>{
    db.getShippings(req).then((row)=>{
        res.json(row)
    })
}

const updataAddress = (req, res, next)=>{
    res.json(db.updataAddress(req));
    // db.updataAddress(req).then((row)=>{
    //     res.json(row)
    // })
}

const deleteAddress = (req, res, next)=>{
    res.json(db.deleteAddress(req));
}

const orders = (req, res, next)=>{
    db.orders(req).then((row)=>{
        res.json(row)
    })
}

const getOrderDetails = (req, res, next)=>{
    db.getOrderDetails(req).then((row)=>{
        res.json(row)
    })
}

const getOrders = (req, res, next)=>{
    db.getOrders(req).then((row)=>{
        res.json(row)
    })
}

const pay = (req, res, next)=>{
    db.pay(req).then((row)=>{
        res.json(row)
    })
}

const getHeaderOne = (req, res, next)=>{
    db.getHeaderOne().then((row)=>{
        res.json(row)
    })
}

const getHeaderTwo = (req, res, next)=>{
    db.getHeaderTwo().then((row)=>{
        res.json(row)
    })
}

const itemCarts = (req, res, next)=>{
    db.itemCarts(req).then((row)=>{
        res.json(row)
    })
}

const register = (req, res, next)=>{
    db.register(req).then((row)=>{
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
    shippings,
    getShippings,
    updataAddress,
    deleteAddress,
    orders,
    getOrderDetails,
    getOrders,
    pay,
    getHeaderOne,
    getHeaderTwo,
    itemCarts,
    register
}