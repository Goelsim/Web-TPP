function shadowfn(param) {
    console.log("Parameter was " + param);
}
shadowfn("I am good fn");
shadowfn();
shadowfn("You are loosing",  "something");

function shadow() {
    console.log(arguments);
}
shadow("I am good fn");
shadow();
shadow("You are loosing",  "something");
