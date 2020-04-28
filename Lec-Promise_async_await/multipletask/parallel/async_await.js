// parallel_multiTask
let fs = require("fs");

let files = ["../../f1.txt", "../../f2.txt", "../../f3.txt", "../../f4.txt", "../../f5.txt",]

async function myFun() {
    let f1 = await fs.promises.readFile(files[0]);
    console.log(f1 + "")
}

async function myFun1() {
    let f2 = await fs.promises.readFile(files[1]);
    console.log(f2 + "")
}

async function myFun2() {
    let f3 = await fs.promises.readFile(files[2]);
    console.log(f3 + "")
}

async function myFun3() {
    let f4 = await fs.promises.readFile(files[3]);
    console.log(f4 + "")
}

async function myFun4() {
    let f5 = await fs.promises.readFile(files[4]);
    console.log(f5 + "")
}


myFun();
myFun1();
myFun2();
myFun3();
myFun4();
