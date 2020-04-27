let fs = require("fs");
console.log("Before: ");
fs.readFile("f1.html", function(err, content) {
    console.log(content + "");
})
console.log("After");