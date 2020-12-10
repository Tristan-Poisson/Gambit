const mariadb = require('mariadb');

var config = {
    host : "",
    user : "",
    password : "",
    connectionLimit : 5,
}

var pool = null;
var connection = null;

function Request() {
    this.body = "";

    this.select = function (arg) {
        this.body += `SELECT ${arg} `
        return this;
    }

    this.where = function (arg) {
        this.body += `WHERE ${arg} `
        return this;
    }
    this.from = function (arg) {
        this.body += `FROM ${arg} `
        return this;
    }
    this.groupBy = function (arg) {
        this.body += `GROUP BY ${arg} `
        return this;
    }
}

module.exports.newRequest = () => {
    return new Request();
}

module.exports.connect = async(server, user, password) => {
    config.user = user;
    config.password = password;
    config.host = server;
    pool = mariadb.createPool(config);

    pool.getConnection()
    .then(conn => {
        connection = conn;
        console.log("connection successful");
    }
    ).catch(err => {
        console.log(err);
    });
    /*try {
        await sql.connect(`mssql://${hostName}:${password}@${ip}:${port}`);
    } catch (err) {
        console.log(err);
        // ... error checks
    }*/
}

module.exports.sendRequest = async(request) => {
    var result;

    conn.query(request.body)
        .then((rows) => {
            result.rows = rows;
            console.log(rows);
        })
        .then((res) => {
            result.res = res;
            console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
        })
        .catch(err => {
            //handle error
            console.log(err); 
        })
    return result;
}