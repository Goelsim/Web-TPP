setTimeout (function() {
    console.log("Task 1 printed sfter 5 sec")
}, 3000);

let ft = Date.now() + 5 * 1000;
while(Date.now() < ft) {

}

setTimeout(function() {
    console.log("Task 2 printed after 3 sec")
}, 3000);

setTimeout(function() {
    console.log("Task 3 printed after 2 sec")
}, 2000);