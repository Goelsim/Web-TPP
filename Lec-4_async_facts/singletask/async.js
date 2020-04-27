let fs = require("fs");
console.log("Started executing file");
console.log("CPU is stuck till file is read");
let content = fs.readFile("f1.mp4", function(err, data) {
    console.log(data.byteLength);
});
console.log("CPU is free now");
console.log("Now i can print something");