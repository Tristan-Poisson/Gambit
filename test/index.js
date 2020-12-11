var sqlTest = require("../sqlaccess/sqlAccess.js");

var sqlPattern = require("../sqlpattern/sqlPattern.js");

async function main() {
    await sqlTest.connect("127.0.0.1", "killb", "@0Z");
    var r = sqlTest.newRequest();
 
    var user = {
        table : "EIP_GAMBIT.myTable",
        id : "6",
        val : "KARL",
    }
    console.log(await sqlPattern.insertUserConfig(user));
    
    //console.log(await sqlPattern.getUser("1"));
    
    r.body = "select * from EIP_GAMBIT.myTable;"
    await sqlTest.sendRequest(r)
    .then(result => {
        console.log(result);
    });
    
    sqlTest.disconnect();
}

main();