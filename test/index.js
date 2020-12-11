var sqlTest = require("../sqlaccess/sqlAccess.js");

async function main() {

    var r = sqlTest.newRequest();
    //r.select("*").from("a");
    r.body = "select * from EIP_GAMBIT.Users;"
    console.log(r.body);
    
    await sqlTest.connect("127.0.0.1", "killb", "@0Z");
    //*/
    console.log("Pre");
    console.log(sqlTest.sendRequest(r));
    console.log("After");
    
    //sqlTest.disconnect();
}

main();
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (answer) => {
  console.log(`bye`);
  rl.close();
});