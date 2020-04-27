function promiseCreater() {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            resolve(10);
        }, 1000);
    })
}

let pPromise = promiseCreater();
console.log("When I was pending");
console.log(pPromise);

setTimeout(function () {
    console.log("When I got resolved");
    console.log(pPromise);
}, 2000);