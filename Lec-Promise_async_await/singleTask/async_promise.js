let fs = require("fs");

let p = fs.promises.readFile("../f1.txt")
p.then(function(data) {
    console.log(data + "");
});
