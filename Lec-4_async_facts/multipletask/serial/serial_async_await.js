// f1 => f2 => f3
let fs = require("fs");
console.log("Before ");

(async function() {
    let data1 = fs.promises.readFile("../../f1.txt");
    let data2 = fs.promises.readFile("../../f2.txt");
    let data3 = fs.promises.readFile("../../f3.txt");
    data1 = await data1;
    console.log("F1's Data " + data.length);
    data2 = await data2;
    console.log("F2's Data" + data.length);
    data3 = await data3;
    console.log("F3's Data" + data.length)
})()


console.log("After");