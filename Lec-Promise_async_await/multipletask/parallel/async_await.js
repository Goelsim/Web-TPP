parallel_multiTask
let fs = require("fs");

let files = ["../../f1.txt", "../../f2.txt", "../../f3.txt", "../../f4.txt", "../../f5.txt",]

(async function() {
let f1 = await fs.promises.readFile(files[0]);

let f2 = await fs.promises.readFile(files[1]);


let f3 = await fs.promises.readFile(files[1]);


let f4 = await fs.promises.readFile(files[1]);



let f5 = await fs.promises.readFile(files[1]);

console.log(f1 + "");
console.log(f2 + "");
console.log(f3 + "");
console.log(f4 + "");
console.log(f5 + "");

}) ()