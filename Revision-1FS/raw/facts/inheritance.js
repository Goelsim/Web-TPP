Array.prototype.sum = function() {
    let arrSum = 0;
    for(let i = 0; i < this.length; i++)
        arrSum += this[i];
    return arrSum;
}

let arr = [4, 14, 17, 23, 48, 66];
let arr1 = [4, 20, 45, 32, 10];
let sum = sum(arr);
console.log(sum);
let sum1 = sum(arr1);
console.log(sum1);
Array.prototype.myeach = function(cb) {

}