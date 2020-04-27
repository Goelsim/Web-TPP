let arr = [4, 14, 17, 23, 48, 66];

function sqauarer(x) {
    return x * x;
}

function mymap(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

let SqArr = mymap(arr, sqauarer);
console.log(SqArr);

function mymap_(cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(this[i]);
    }
    return newArr;
}

let sq = arr.mymap_(sqauarer);
console.log(sq);

function filterPrime(number) {
    for (let div = 2; div * div <= number; div++) {
        if (number % div == 0) {
            return false;
        }
    }
    return true;
}

function myfilter(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i]) == true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let primeArr = myfilter(arr, filterPrime);
console.log(primeArr);

function myfilter_(cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(arr[i]) == true) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

let pr = arr.myfilter_(filterPrime);
console.log(pr);