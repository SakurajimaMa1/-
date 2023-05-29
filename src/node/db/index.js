const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mall'
})

function conn() {
    connection.connect((err)=>{
        if (err) throw err;
        console.log('Database connect successful....');
    })
}

function queryAll() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM student', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

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
            }
            resolve(res);
        });
    
    });
}

module.exports = {
    queryAll: queryAll,
    login: login
}