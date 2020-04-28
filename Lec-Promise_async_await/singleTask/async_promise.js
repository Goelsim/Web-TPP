let fs = require("fs");

let p = fs.promises.readFile("../f1.txt")
p.then(function(data) {
    console.log(data + "");
}).catch(function (err) {
    console.log(err);
});
