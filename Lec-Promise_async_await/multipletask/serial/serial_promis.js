let fs = require("fs");
let f1 = fs.promises.readFile("../../f1.txt");
f1.then(function(data1) {
    console.log("F1 File content: " + data1.byteLength)
    let f2 = fs.promises.readFile("../../f2.txt");
    f2.then(function(data2) {
        console.log("F2 File Content: " + data2.byteLength);
        let f3 = fs.promises.readFile("../../f3.txt");
        f3.then(function(data3) {
            console.log("F3 FileContent " + data3.byteLength);
        }).catch(function(err) {
            console.log(err);;
        });
    }).catch(function (err) {
        console.log(err);
    });
}).catch(function (err) {
    console.log(err);
})