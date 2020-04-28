serial_multiTask
let fs=require("fs");

let files=["../../f1.txt","../../f2.txt","../../f3.txt","../../f4.txt","../../f5.txt",]

let f1WillReadPro=fs.promises.readFile(files[0]);
f1WillReadPro.then(function(){
    console.log("f1");

    let f2=fs.promises.readFile(files[1]);
    f2.then(function(){
        console.log("f2");
    })

    
    let f3=fs.promises.readFile(files[1]);
    f3.then(function(){
        console.log("f3");
    }).catch(function(err){
        console.log(err);
    })

    
    let f4=fs.promises.readFile(files[1]);
    f4.then(function(){
        console.log("f4");
    }).catch(function(err){
        console.log(err);
    })

    
    let f5=fs.promises.readFile(files[1]);
    f5.then(function(){
        console.log("f5");
    }).catch(function(err){
        console.log(err);
    })
}).catch(function(err){
    console.log(err);
})