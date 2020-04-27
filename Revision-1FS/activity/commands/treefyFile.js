let fs = require("fs");
let path = require("path");
//input=>metadata.json
function treefy(src, dest, node) {

    if (node.isFile == true) {
        //file copy
        let srcPath = path.join(src, node.newName)
        let destPath = path.join(dest, node.oldName);
        fs.copyFileSync(srcPath, destPath);
    } else {
        let dirPath = path.join(dest, node.name);
        fs.mkdirSync(dirPath);
        //print..work
        //dir create

        //children
        let children = node.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            let pPath = dirPath;
            // let childPath=path.join(dest,child.name,);
            treefy(src, pPath, child);
        }
    }
}

let root = require(path.join(process.argv[2], "metadata.json"))
treefy(process.argv[2], process.argv[3], root);