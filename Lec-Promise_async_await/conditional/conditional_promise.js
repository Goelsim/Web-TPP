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

WillBeReadFile('f1.html')
    .then(function (data) {
        if (data.byteLength > 20) {
            Campfile1('f2.html')
        } else {
            Campfile2('f3.html')
        }
    }).catch((err) => {
        console.error(err)
    })

function Campfile1(path) {
    WillBeReadFile(path)
        .then((data) => {
            if (data.byteLength > 40) {
                Campfile('f6.html')
            } else {
                Campfile('f7.html')
            }
        }).catch((err) => {
            console.log(err);
        })
}

function Campfile2(path) {
    WillBeReadFile(path)
        .then((data) => {
            if (data.byteLength < 30) {
                Campfile('f4.html')
            } else {
                Campfile('f5.html')
            }
        }).catch((err) => {
            console.log(err);
        })
}

function Campfile(path) {
    WillBeReadFile(path)
        .then(() => {
            console.log("DONE !!")
        }).catch((err) => {
            console.log(err);
        })
}