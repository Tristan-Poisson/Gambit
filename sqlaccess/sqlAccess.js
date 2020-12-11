const mariadb = require('mariadb/promise');

var config = {
    host : "",
    user : "",
    password : "",
    port: 3306,
    connectionLimit : 5,
}

var pool = null;

function Request() {
    this.body = "";

    this.select = function (...args) {
        this.body += `SELECT `
        for (arg in args) {
            this.body += `${arg} `
            if (arg != args[args.length - 1]) {
                this.body += `${arg} `
            }
        }
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
    await pool.getConnection()
    .then(conn => {
        console.log("connected ! connection id is " + conn.threadId);
        conn.release(); //release to pool
    })
    .catch(err => {
        console.log("not connected due to error: " + err);
    });
    /*.then(err => {
        if (err) {
          console.log("not connected due to error: " + err);
          return false;
        } else {
          console.log("connected ! connection id is " + connection.threadId);
          return true;
        }
    })
    .catch(console.log);
    /*pool.getConnection()
    .then(conn => {
        connection = conn;
        console.log("connection successful");
    }
    ).catch(err => {
        console.log("connection error");
        console.log(err);
    });*/
    /*try {
        await sql.connect(`mssql://${hostName}:${password}@${ip}:${port}`);
    } catch (err) {
        console.log(err);
        // ... error checks
    }*/
}

module.exports.disconnect = () => {
    connection.end();
}

module.exports.sendRequest = async(request) => {
    var result;

    await pool.getConnection()
    .then(conn => {
        conn.query(request.body)
        .then(rows => {
            result = rows;
	        console.log(rows); //[ { 'NOW()': 2018-07-02T17:06:38.000Z }, meta: [ ... ] ]
        })
        .catch(err => {
	        //handle error
        });
        conn.release(); //release to pool
    })
    .catch(err => {
        console.log("not send due to error: " + err);
    });
    /*result = await connection.query(request.body);/*, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < rows.length; i++)
            result.push(rows[i]);
        console.log(result);
    });*/
    console.log("result : " + result);
    return result;
}

/*
const mariadb = require('mariadb/promise');

var config = {
    host : "",
    user : "",
    password : "",
    port: 3306,
    connectionLimit : 5,
}

var pool = null;
var connection = null;

function Request() {
    this.body = "";

    this.select = function (...args) {
        this.body += `SELECT `
        for (arg in args) {
            this.body += `${arg} `
            if (arg != args[args.length - 1]) {
                this.body += `${arg} `
            }
        }
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

    connection = mariadb.createConnection(config);
    return connection.connect(err => {
        if (err) {
          console.log("not connected due to error: " + err);
          return false;
        } else {
          console.log("connected ! connection id is " + connection.threadId);
          return true;
        }
    });
    /*pool.getConnection()
    .then(conn => {
        connection = conn;
        console.log("connection successful");
    }
    ).catch(err => {
        console.log("connection error");
        console.log(err);
    });*/
    /*try {
        await sql.connect(`mssql://${hostName}:${password}@${ip}:${port}`);
    } catch (err) {
        console.log(err);
        // ... error checks
    }
}

module.exports.disconnect = () => {
    connection.end();
}

module.exports.sendRequest = async(request) => {
    var result;

    result = await connection.query(request.body);/*, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < rows.length; i++)
            result.push(rows[i]);
        console.log(result);
    });
    console.log(result);
    return result;
}
*/