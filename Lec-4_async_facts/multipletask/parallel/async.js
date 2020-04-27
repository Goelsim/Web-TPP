let fs = require("fs");
console.log("Started executing file");
console.log("CPU is stuck till file is read");
fs.readFile("../../f1.txt", function cb(err, data) {
    console.log("file 1 has arrived");
    console.log(data.byteLength);
});

let finalTime = Date.now() + 1000 * 5;
while(Date.now() < finalTime) {

}

console.log("started file 2 reading process");
fs.readFile("../../f2.txt", function cb(err, data) {
    console.log("file 2 has arrived");
    console.log(data.byteLength);
});
fs.readFile("../../f3.txt", function cb(err, data) {
    console.log("file 3 has arrived");
    console.log(data.byteLength);
});
console.log("CPU is free now");
console.log("Now i can print something");