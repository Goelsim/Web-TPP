require("chromedriver");
let swd = require("selenium-webdriver");
let bldr = new swd.Builder;
let driver = bldr.forBrowser("chrome").build();
let googlePageWillBeOpenedPromise = driver.get("http://google.com");
googlePageWillBeOpenedPromise.then(function() {
    console.log("Google page opened");
})
googlePageWillBeOpenedPromise.catch(function(err) {
    console.log(err);
})