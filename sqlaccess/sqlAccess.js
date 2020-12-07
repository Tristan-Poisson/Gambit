const sql = require('mssql');

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

module.exports.connect = async(ip, port, hostName, password) => {
    try {
        await sql.connect(`mssql://${hostName}:${password}@${ip}:${port}`)
    } catch (err) {
        // ... error checks
    }
}

module.exports.sendRequest = async(request) => {
    var result;

    try {
        result = await sql.query`${request.body}`
    } catch (err) {
        result = undefined
    }
    return result;
}