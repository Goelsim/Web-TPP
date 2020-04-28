//serial_singleTask
let fs=require("fs");

let f1WillBeReadPro=fs.promises.readFile("../f1.txt");

f1WillBeReadPro.then(function(data){
    console.log("f1 read"+data)
}).catch(function(err){
    console.log(err);
})