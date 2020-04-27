let fs = require("fs");
console.log("Before: ");
console.log("Start");
fs.readFile("f1.html", function(err, content) {
    if(err)
        console.log(err);
    else {
        console.log(content + "");
        fs.readFile("f2.html", function(err, content) {
            if(err)
                console.log(err);
            else {
                console.log(content + "");
            }
        
            console.log("Finish");
        })
    }

    console.log("Finish");
})
console.log("After");