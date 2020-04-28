//parallel loop promise
let fs = require("fs");
function promiseMultiFileReader() {
  let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt", "../f5.txt"];
  for (let i = 0; i < files.length;) {
    let nsp = fs.promises.readFile(files[i++]);
    nsp.then(function (data) {
      console.log(`Data of file ${i}`);
    })
    nsp.catch(function (err) {
      console.log(err)
    })
  }
}
promiseMultiFileReader()









// function promiseTrail(){
//   let files = ["../f1.txt", "../f2.txt", "../f3.txt", "../f4.txt", "../f5.txt"];
//    for(let i=0;i<files.length;i++ {
//            let f0=fs.promises.readFile(files[i++]);
//            f0.then(function(data){
//                console.log("f"+i);
//            }).catch(function(err){
//                console.log(err);
//            })
//    }    

// }