const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mall'
})

setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

function conn() {
    connection.connect((err)=>{
        if (err) throw err;
        console.log('数据库连接成功....');
    })
}

function queryAll() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM detail', (err, rows) => {
            if (err) reject(err);
            res = {
                "status": 1,
                "msg": "参数错误"
            }
            if (Object.keys(rows).length !== 0 || typeof rows == 'undefined' || rows == null) {
                console.log();
                list = []
                for (i = 0; i < rows.length; i++) {
                    resDetail = {
                        "id": rows[i].id,
                        "categoryId": rows[i].categoryId,
                        "name": rows[i].name,
                        "subtitle": rows[i].subtitle,
                        "mainImage": rows[i].mainImage,
                        "status": rows[i].status,
                        "price": rows[i].price
                    }
                    list.push(resDetail)
                }
                res = {
                    "status": 0,
                    "data": {
                        "list": list
                    }
                }
            }
            resolve(res);
        });
    });
}

let loginUser = {}

function login(req) {
    return new Promise((resolve, reject) => {
        let username = req.body.username
        let password = req.body.password
        
        connection.query(`SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`, (err, rows) => {
            res = {
                "status": 1,
                "msg": "密码错误"
            }
            if (err) reject(err);
            if (Object.keys(rows).length !== 0 || typeof rows == 'undefined' || rows == null) {
                res = {
                    "status": 0,
                    "data": {
                        "id": rows[0].id,
                        "username": rows[0].username,
                        "email": rows[0].email,
                        "phone": rows[0].phone,
                        "role": rows[0].role,
                        "createTime": rows[0].createTime,
                        "updateTime": rows[0].updateTime
                    }
                }
                loginUser = res;
            }
            resolve(res);
        });
    
    });
}

function user(){
    if (Object.keys(loginUser).length === 0) {
        return {
            "status": 0,
            "msg": "没有用户数据"
        }
    }
    return loginUser
}

function cartsProductsSum() {
    return new Promise((resolve, reject) => {
        if (Object.keys(loginUser).length === 0) {
            cartsInfo = {
                "status": 0,
                "data": 0
            }
            resolve(cartsInfo)
        }
        connection.query(`SELECT * FROM carts WHERE userId = '${loginUser.data.id}'`, (err, rows) => {
            if (err) reject(err);
            cartsInfo = {
                "status": 0,
                "data": rows.length
            }
            resolve(cartsInfo);
        })
    })
}

function getProductsIdInfo(req) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM detail WHERE id = '${req.params.id}'`, (err, rows) => {
            if (err) reject(err);
            res = {
                "status": 1,
                "msg": "该商品已下架或删除"
            }
            if (Object.keys(rows).length !== 0 || typeof rows == 'undefined' || rows == null) {
                res = {
                    "status": 0,
                    "data": {
                        "id": rows[0].id,
                        "categoryId": rows[0].categoryId,
                        "name": rows[0].name,
                        "subtitle": rows[0].subtitle,
                        "mainImage": rows[0].mainImage,
                        "subImages": rows[0].subImages,
                        "detail": rows[0].detail,
                        "price": rows[0].price,
                        "stock": rows[0].stock,
                        "status": rows[0].status,
                        "createTime": rows[0].createTime,
                        "updateTime": rows[0].updateTime
                    }
                }
            }
            resolve(res);
        });
    });
}

async function carts(req) {
    if (Object.keys(loginUser).length === 0) {
        return {
            "status": 10,
            "msg": "用户未登录,请登录"
        }
    }

    let productId = req.body.productId
    let selected = req.body.selected
    let queryProduct = {}
    let userId = loginUser.data.id

    let product = {
        params: {
            id: productId
        }
    }

    await this.getProductsIdInfo(product).then((res)=>{
        queryProduct = res.data
    })

    const sql = "INSERT INTO carts(userId, productId, quantity, productName, productSubtitle, productMainImage, productPrice, productStatus, productTotalPrice, productStock, productSelected) values(?,?,?,?,?,?,?,?,?,?,?)"
    const sqlParams = [`${userId}`, `${productId}`, `12`, `${queryProduct.name}`, `${queryProduct.subtitle}`, `${queryProduct.subImages}`, `${queryProduct.price}`, `${queryProduct.status}`, `${queryProduct.price}`, `${queryProduct.stock}`,`${selected}`]
    connection.query(sql, sqlParams, (err, rows) => {
        if (err) return {
            "status": 1,
            "msg": "添加失败"
        };
    })

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM carts WHERE userId = '${userId}'`, (err, rows) => {
            if (err) reject(err);
            let selected = true;
            for (i = 0; i < rows.length; i++) {
                if (rows[i].productSelected == "false") {
                    selected = false;
                }
            }
            cartsInfo = {
                "status": 0,
                "data": {
                    "cartProductVoList": rows,
                    "selectedAll": selected,
                    "cartTotalPrice": countCartTotalPrice(rows).toFixed(2)
                },
                
            }
            resolve(cartsInfo);
        })
    })
}

function logout() {
    loginUser = {}
    return {
        "status": 0,
        "msg": "退出登录"
    }
}

function getCarts() {
    return new Promise((resolve, reject) => {
        if (Object.keys(loginUser).length === 0) {
            cartsInfo = {
                "status": 10,
                "msg": "用户未登录,请登录"
            }
            resolve(cartsInfo)
        }
        connection.query(`SELECT * FROM carts WHERE userId = '${loginUser.data.id}'`, (err, rows) => {
            if (err) reject(err);
            let selected = true;
            for (i = 0; i < rows.length; i++) {
                if (rows[i].productSelected == "false") {
                    selected = false;
                }
            }
            cartsInfo = {
                "status": 0,
                "data": {
                    "cartProductVoList": rows,
                    "selectedAll": selected,
                    "cartTotalPrice": countCartTotalPrice(rows).toFixed(2)
                },
            }
            resolve(cartsInfo);
        })
    })
}

function updataProductQuantitySelectedAll(params) {
    connection.query(`UPDATE carts SET productSelected = '${params}'`, (err, rows) => {
        if(err) return(err);
        return({
            "status": 0,
            "data": {
                "修改成功": rows
            }
        });
    })
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM carts WHERE userId = '${loginUser.data.id}'`, (err, rows) => {
            if (err) reject(err);
            let selected = true;
            for (i = 0; i < rows.length; i++) {
                if (rows[i].productSelected == "false") {
                    selected = false;
                }
            }
            cartsInfo = {
                "status": 0,
                "data": {
                    "cartProductVoList": rows,
                    "selectedAll": selected,
                    "cartTotalPrice": countCartTotalPrice(rows).toFixed(2)
                },
            }
            resolve(cartsInfo);
        })
    })
}

function countCartTotalPrice(rows) {
    let count = 0;
    for (i = 0; i < rows.length; i++) {
        if (rows[i].productSelected == "true") {
            count += rows[i].productPrice * parseInt(rows[i].quantity);
        }
    }
    return count;
}

function updataProductQuantitySelected(req) {
    let productId = req.params.id
    let quantity = req.body.quantity
    let selected = req.body.selected
    const sql = 'UPDATE carts SET quantity = ?, productSelected = ? WHERE productId = ?'
    const sqlParams = [`${quantity}`, `${selected}`, `${productId}`]

    connection.query(sql, sqlParams,(err, rows) => {
        if (err) return {
            "status": 1,
            "msg": "修改失败"
        };
    })

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM carts WHERE userId = '${loginUser.data.id}'`, (err, rows) => {
            if (err) reject(err);
            let selected = true;
            for (i = 0; i < rows.length; i++) {
                if (rows[i].productSelected == "false") {
                    selected = false;
                }
            }
            cartsInfo = {
                "status": 0,
                "data": {
                    "cartProductVoList": rows,
                    "selectedAll": selected,
                    "cartTotalPrice": countCartTotalPrice(rows).toFixed(2)
                },
            }
            resolve(cartsInfo);
        })
    })
}

function productQuantitySelectAll(req) {
    let param = "true";
    if (req.params.id == "unSelectAll") {
        param = "false";
    }
    console.log(2);
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE carts SET productSelected = '${param}'`, (err, rows) => {
            if(err) reject(err);
            resolve({
                "status": 0,
                "data": {
                    "修改成功": rows
                }
            });
        })
    })
}

function deleteCartsProduct(req) {
    let productId = req.params.id
    if (Object.keys(loginUser).length === 0) {
        return {
            "status": 10,
            "msg": "用户未登录,请登录"
        }
    }
    const sql = 'DELETE FROM carts WHERE productId = ?';
    const sqlParams = [`${productId}`];

    connection.query(sql, sqlParams,(err, rows) => {
        if (err) return {
            "status": 1,
            "msg": "删除失败"
        };
    })

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM carts WHERE userId = '${loginUser.data.id}'`, (err, rows) => {
            if (err) reject(err);
            let selected = true;
            for (i = 0; i < rows.length; i++) {
                if (rows[i].productSelected == "false") {
                    selected = false;
                }
            }
            cartsInfo = {
                "status": 0,
                "data": {
                    "cartProductVoList": rows,
                    "selectedAll": selected,
                    "cartTotalPrice": countCartTotalPrice(rows).toFixed(2)
                },
            }
            resolve(cartsInfo);
        })
    })
}

module.exports = {
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
    updataProductQuantitySelectedAll,
    productQuantitySelectAll
}