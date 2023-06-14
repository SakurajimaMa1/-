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
        connection.query('SELECT * FROM user', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
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
            if (err) throw(err);
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
            cartsInfo = {
                "status": 0,
                "data": {
                    cartProductVoList: rows
                },
                "selectedAll": true,
                "cartTotalPrice": 89389.75
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
    carts
}