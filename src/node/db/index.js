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
    const sqlParams = [`${userId}`, `${productId}`, `1`, `${queryProduct.name}`, `${queryProduct.subtitle}`, `${queryProduct.subImages}`, `${queryProduct.price}`, `${queryProduct.status}`, `${queryProduct.price}`, `${queryProduct.stock}`,`${selected}`]
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

// 获取购物车中物品的单价
async function getPrice(productId) {
    return new Promise((resolve, reject)=>{
        connection.query(`SELECT * FROM carts WHERE userId = '${loginUser.data.id}' AND productId = '${productId}'`, (err, rows) => {
            resolve(rows);
        })
    })
}

// 更改购物车数量
async function updataProductQuantitySelected(req) {
    let productId = req.params.id
    let quantity = req.body.quantity
    let selected = req.body.selected
    let totalPrice = 0
    let price = 0

    await getPrice(productId).then((row)=>{
        price = row[0].productPrice
    })

    totalPrice = price * quantity;

    const sql = 'UPDATE carts SET quantity = ?, productSelected = ? , productTotalPrice = ? WHERE productId = ?'
    const sqlParams = [`${quantity}`, `${selected}`, `${totalPrice}`,`${productId}`]

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

// 添加收货地址
function shippings(req) {
    let userId = loginUser.data.id;
    let receiverName = req.body.receiverName;
    let receiverPhone = req.body.receiverPhone;
    let receiverMobile = req.body.receiverMobile;
    let receiverProvince = req.body.receiverProvince;
    let receiverCity = req.body.receiverCity;
    let receiverDistrict = req.body.receiverDistrict;
    let receiverAddress = req.body.receiverAddress;
    let receiverZip = req.body.receiverZip;

    const sql = 'INSERT INTO shippings(userId, receiverName, receiverPhone, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, receiverZip) values(?,?,?,?,?,?,?,?,?)';
    const sqlParams = [`${userId}`, `${receiverName}`, `${receiverPhone}`, `${receiverMobile}`, `${receiverProvince}`, `${receiverCity}`, `${receiverDistrict}`, `${receiverAddress}`, `${receiverZip}`]
    
    return new Promise((resolve, reject)=>{
        let shippingsInfo = {
            "status": 1,
            "msg": "新建地址失败"
        }
        connection.query(sql, sqlParams, (err, rows)=>{
            if (err) reject(err);
            shippingsInfo = {
                "status": 0,
                "msg": "新建地址成功",
                "data": {
                    "shippingId": 28
                }
            }
            resolve(shippingsInfo)
        })
    })
}

function getShippings(req) {

    return new Promise((resolve, reject)=>{
        let getShippingsInfo = {
            "status": 1,
            "msg": "请登录之后查询"
        }
        if (Object.keys(loginUser).length === 0) {
            resolve({
                "status": 10,
                "msg": "用户未登录,请登录"
            }) 
        }
        connection.query(`SELECT * FROM shippings WHERE userId = '${loginUser.data.id}'`, (err, rows)=>{
            if (err) reject(err)
            getShippingsInfo = {
                "status": 0,
                "data": {
                    "pageNum": 1,
                    "pageSize": 10,
                    "size": 2,
                    "orderBy": null,
                    "startRow": 1,
                    "endRow": 2,
                    "total": 2,
                    "pages": 1,
                    "list": rows,
                    "firstPage": 1,
                    "prePage": 0,
                    "nextPage": 0,
                    "lastPage": 1,
                    "isFirstPage": true,
                    "isLastPage": true,
                    "hasPreviousPage": false,
                    "hasNextPage": false,
                    "navigatePages": 8,
                    "navigatepageNums": [
                        1
                    ]
                }
            }
            resolve(getShippingsInfo)
        })
    })
}

function updataAddress(req) {
    let id = req.params.id
    let receiverName = req.body.receiverName;
    let receiverPhone = req.body.receiverPhone;
    let receiverMobile = req.body.receiverMobile;
    let receiverProvince = req.body.receiverProvince;
    let receiverCity = req.body.receiverCity;
    let receiverDistrict = req.body.receiverDistrict;
    let receiverAddress = req.body.receiverAddress;
    let receiverZip = req.body.receiverZip;

    const sql = 'UPDATE shippings SET receiverName = ?, receiverPhone = ?, receiverMobile = ?, receiverProvince = ?, receiverCity = ?, receiverDistrict = ?, receiverAddress = ?, receiverZip = ? WHERE id = ?'
    const sqlParams = [`${receiverName}`, `${receiverPhone}`, `${receiverMobile}`,`${receiverProvince}`, `${receiverCity}`, `${receiverDistrict}`, `${receiverAddress}`, `${receiverZip}`, `${id}`]

    connection.query(sql, sqlParams,(err, rows) => {
        if (err) return {
            "status": 1,
            "msg": "更新地址失败"
        };
    })
    return {
        "status": 0,
        "msg": "更新地址成功"
    }

}

function deleteAddress(req) {
    let id = req.params.id
    
    const sql = 'DELETE FROM shippings WHERE id = ?';
    const sqlParams = [`${id}`];

    connection.query(sql, sqlParams,(err, rows) => {
        if (err) return {
            "status": 1,
            "msg": "更新地址失败"
        };
    })
    return {
        "status": 0,
        "msg": "更新地址成功"
    }
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
    productQuantitySelectAll,
    shippings,
    getShippings,
    updataAddress,
    deleteAddress
}