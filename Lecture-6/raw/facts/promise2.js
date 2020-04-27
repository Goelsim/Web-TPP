function promiseCreater() {
    return new Promise(function(resolve, reject) {
        // setTimeout(function () {
        //     reject(10);
        // }, 1000);
        reject(10);
    })
}

let pPromise = promiseCreater();
console.log("When I was pending");
console.log(pPromise);

function resolve(data) {
    console.log(data);
}

function reject(err) {
    console.log(err);
}

pPromise.then(resolve, reject);