const sqlTest = require('../sqlaccess/sqlAccess');

module.exports.askDB = async(sqlstatement) => {
    var r = sqlTest.newRequest();

    r.body = sqlstatement;
    return await sqlTest.sendRequest(r)
    .then(result => {
        return result;
    });
}

module.exports.insertUserConfig = async(configUser) => {
    var r = sqlTest.newRequest();

    if (configUser.table === undefined) {
        return [];
    }
    console.log("configUser.table");
    console.log(configUser.table);
    r.body = `INSERT INTO ${configUser.table} (`
    
    delete configUser.table;

    let firstEntry = true;

    for (const [key, value] of Object.entries(configUser)) {
        if (!firstEntry) {
            r.body += ", ";
        } else {
            firstEntry = false;
        }
        r.body += "`"+key+"`"
        //console.log(`${key}: ${value}`);
    }
    
    r.body += ") VALUES (";
    firstEntry = true;

    for (const [key, value] of Object.entries(configUser)) {
        if (!firstEntry) {
            r.body += ", "
        } else {
            firstEntry = false;
        }
        if (value === null) {
            r.body += "NULL"
        } else {
            r.body += "'"+value+"'";
        }
    }
    r.body += ");"
    //console.log(r.body);
    return await sqlTest.sendRequest(r)
    .then(result => {
        return result;
    });
}

module.exports.getUserPerms = async(user) => {
    var r = sqlTest.newRequest();

    r.body = `Select * from Users LEFT JOIN Perms ON Users.id = Perms.User_id where id=${user}`
    return await sqlTest.sendRequest(r)
    .then(result => {
        return result;
    });
}

module.exports.getUser = async(user) => {
    var r = sqlTest.newRequest();
    //var rtrn;

    r.body = `Select * from EIP_GAMBIT.Users where id=${user}`;
    return await sqlTest.sendRequest(r)
    .then(result => {
        //rtrn = result;
        //console.log(result);
        return result;
    });
}
