function promiseCreater() {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            reject(10);
        }, 1000);
    })
}

let pPromise = promiseCreater();
// console.log("pending received from p1");
// console.log(pPromise);
// console.log("```````````````````````````````````");

function resolve(data) {
    console.log("Inside resolve of 1st then");
    console.log(data);
    console.log("```````````````````````````````````");
    return 20;
}

function reject(err) {
    console.log(err);
    //return Promise.resolve();
    //throw new Error("Error sent by reject / fcb of 1st then");
    //return Promise.reject();
}

function resolve1(data) {
    console.log("success cb of 2nd then");
    console.log(data);
}

function reject1(err) {
    console.log("Inside fcb of 2nd then");
    console.log(err);
}
pPromise.then(resolve, reject).then(resolve1, reject1);