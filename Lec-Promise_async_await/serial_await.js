await_single_serial
let fs = require("fs");
console.log("Before ");

(async function () {
    try{

        let data1 = fs.promises.readFile("../f1.txt");
        data1 = await data1;
        console.log("F1's Data " + data1.length);
    }catch{
        console.log("error");
    }
 
})()