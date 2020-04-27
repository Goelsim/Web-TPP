let fs = require("fs");
let path = require("path");

module.exports.view = function() {
    let src = arguments[0];
    let mode = arguments[1];
    if(mode == "-t")
        viewAsTree(src, "");
    else if(mode == "-f")
        viewAsFlatFile(src);
    else
        console.log("Wrong mode");
}

function checkPathIsDirectoryOrNot(src) {
    let ans = fs.lstatSync(src).isFile();
    return ans;
}

function childrenReader(src) {
    let childrens = fs.readdirSync(src);
    return childrens;
}

function viewAsFlatFile(src) {
    let isFile = checkPathIsDirectoryOrNot(src);
    if(isFile == true) {
        console.log(src + "*");
    }
    else {
        console.log(src);
        let children = childrenReader(src);
        for(let i = 0; i < children.length; i++) {
            let child = children[i];
            let childPath = path.join(src, child);
            viewAsFlatFile(childPath);
        }
    }
}

function viewAsTree(src, indent) {
    let isFile = checkPathIsDirectoryOrNot(src);
    if(isFile == true) {
        console.log(indent + path.basename(src) + "*");
    }
    else {
        console.log(indent + path.basename(src));
        let children = childrenReader(src);
        for(let i = 0; i < children.length; i++) {
            let child = children[i];
            let childPath = path.join(src, child);
            viewAsTree(childPath, indent + "\t");
        }
    }
}

// viewAsTree(process.argv[2], "");
// viewAsFlatFile(process.argv[2]);