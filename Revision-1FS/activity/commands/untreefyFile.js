let fs = require("fs");
let path = require("path")
var uniqid = require('uniqid');

function checkPathisDirOrNot(src) {
    let ans = fs.lstatSync(src).isFile();
    return ans;
}

function childrenReader(src) {
    let childrens = fs.readdirSync(src);
    return childrens;
}


function untreefy(src, dest, node) {
    let isFile = checkPathisDirOrNot(src);
    if (isFile == true) {
        let newFilename = uniqid();
        let destPath = path.join(dest, newFilename)
        fs.copyFileSync(src, destPath);


        node.isFile = true,
            node.oldName = path.basename(src),
            node.newName = newFilename;

        //newname data copy
        // console.log("file");
    } else {
        node.isFile = false;
        node.children = [];
        node.name = path.basename(src);

        // console.log("directory" + path.basename(src));
        let childrens = childrenReader(src);
        for (let i = 0; i < childrens.length; i++) {
            let cpath = path.join(src, childrens[i]);
            let cobj = {};
            untreefy(cpath, dest, cobj);
            node.children.push(cobj);
        }
    }
}


let root = {};
untreefy(process.argv[2], process.argv[3], root);
fs.writeFileSync(path.join(process.argv[3], "metadata.json"), JSON.stringify(root));
// console.log(root);