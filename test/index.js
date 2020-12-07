var sqlTest = require("../sqlaccess/sqlAccess.js");

var r = sqlTest.newRequest();

r.select("*").from("a");

console.log(r.body);