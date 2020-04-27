let fs = require("fs");
console.log("Before: ");
console.log("Start");
let fileWillBeReadPromise = fs.promises.readFile("f1.html");
fileWillBeReadPromise.then(function(err, content) {
    console.log(content + "");
    console.log("Finish");
})
fileWillBeReadPromise.catch(function(err, content) {
    console.log(err);
})
console.log("After");
console.log("I will execute");