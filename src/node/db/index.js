const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'stu'
})

function conn() {
    connect.connect((err)=>{
        if (err) throw err;
        console.log('Database connect successful....');
    })
}

function queryAll() {
    return new Promise((resolve, reject) => {
        connect.query('SELECT * FROM student', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

module.exports = {
    queryAll: queryAll
}