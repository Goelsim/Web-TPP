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
        Campfile1('f2.html')
    } else {
        Campfile2('f3.html')
    }

} 

async function Campfile1(path) {
    let b = WillBeReadFile(path)
    if (b.byteLength > 40) {
        Campfile('f6.html')
    } else {
        Campfile('f7.html')
    }
}

async function Campfile2(path) {
    let c = WillBeReadFile(path)
    if (c.byteLength < 30) {
        Campfile('f4.html')
    } else {
        Campfile('f5.html')
    }
}

async function Campfile(path) {
    let d = await WillBeReadFile(path)
}

res()