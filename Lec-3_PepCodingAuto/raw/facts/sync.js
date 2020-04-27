let fs = require("fs");
console.log("Before: ");
let f1content = fs.readFileSync("f1.html");
console.log(f1content + "");
let f2content = fs.readFileSync("f2.html");
console.log(f2content + "");
console.lof("finish");
console.log("After");