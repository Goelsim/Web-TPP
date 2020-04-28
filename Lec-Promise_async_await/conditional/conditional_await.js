const fs = require('fs');

function WillBeReadFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            } else {
                console.log(path + " " + data.byteLength);
                resolve(data)
            }
        })
    })
}

async function res() {
    let a = await WillBeReadFile('f1.html')
    if (a.byteLength > 20) {
        CheckFile1('f2.html')
    } else {
        CheckFile2('f3.html')
    }

} 

async function CheckFile1(path) {
    let b = WillBeReadFile(path)
    if (b.byteLength > 40) {
        CheckFile('f6.html')
    } else {
        CheckFile('f7.html')
    }
}

async function CheckFile2(path) {
    let c = WillBeReadFile(path)
    if (c.byteLength < 30) {
        CheckFile('f4.html')
    } else {
        CheckFile('f5.html')
    }
}

async function CheckFile(path) {
    let d = await WillBeReadFile(path)
}

res()