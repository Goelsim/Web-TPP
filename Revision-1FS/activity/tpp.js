// const input = process.argv;
// console.log(input);

let { view } = require("./commands/viewFile");
let { treefy } = require("./commands/treefyFile");
let { untreefy } = require("./commands/untreefyFile");
let { help } = require("./commands/helpFile");

let cmd = process.argv[2];
switch(cmd) {
    case "view" : 
        view(process.argv[3], process.argv[4]);
        //console.log("View is implemented");
        break;

    case "treefy" : 
        treefy(process.argv[3], process.argv[4]);
        //treefyFile.treefy(process.argv[3],process.argv[4]);
        //console.log("treefy is implemented");
        break;

    case "untreefy" : 
        untreefy(process.argv[3], process.argv[4]);
        //console.log("ubtreefy is implemented");
        break;

    case "help" : 
        help();
        //console.log("help is implemented");
        break;
    
    default : 
        console.log(" ");
}