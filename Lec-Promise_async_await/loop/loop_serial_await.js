let fs = require("fs");
let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt", "../f5.txt"];

async function myFun() {
    for (let i = 0; i < files.length; i++) {
    let a = await fs.promises.readFile(files[i]);
    console.log(a + "")
    }
}

myFun();