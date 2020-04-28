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
            CheckFile1('f2.html')
        } else {
            CheckFile2('f3.html')
        }
    }).catch((err) => {
        console.error(err)
    })

function CheckFile1(path) {
    WillBeReadFile(path)
        .then((data) => {
            if (data.byteLength > 40) {
                CheckFile('f6.html')
            } else {
                CheckFile('f7.html')
            }
        }).catch((err) => {
            console.log(err);
        })
}

function CheckFile2(path) {
    WillBeReadFile(path)
        .then((data) => {
            if (data.byteLength < 30) {
                CheckFile('f4.html')
            } else {
                CheckFile('f5.html')
            }
        }).catch((err) => {
            console.log(err);
        })
}

function CheckFile(path) {
    WillBeReadFile(path)
        .then(() => {
            console.log("DONE !!")
        }).catch((err) => {
            console.log(err);
        })
}