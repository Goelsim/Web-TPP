let fs = require("fs");

async function readFile(promise) {
    let a = await promise;
    console.log(a + "");
} 

let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt", "../f5.txt"];

for (let i = 0; i < files.length(); i++) {
    readFile(fs.promises.readFile(files[i]));
}