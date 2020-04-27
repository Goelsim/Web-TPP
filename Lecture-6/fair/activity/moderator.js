let fs = require("fs");
require("chromedriver");
let swd = require("selenium-webdriver");
let bldr = new swd.Builder();
let driver = bldr.forBrowser("chrome").build();
let cfile = process.argv[2];
let uToAdd = process.argv[3];
(async function () {
    try {
        let data = await fs.promises.readFile(cFile);
        let { url, pwd, user } = JSON.parse(data);
        await driver.get(url);
        let unInputWillBeFPromise = driver.findElement(swd.By.css('#input-1'));
        let psInputWillBeFPromise = driver.findElement(swd.By.css('#input-2'));
        let unNpsEl = await Promise.all([unInputWillBeFPromise, psInputWillBeFPromise]);
        let uNameWillBeSendPromise = unNpsEl[0].sendKeys(user);
        let pWillBeSendPromise = unNpsEl[1].sendKeys(pwd);
        await Promise.all([uNameWillBeSendPromise, pWillBeSendPromise]);
        let loginBtn = await driver.findElement(swd.By.css("button[data-analytics=LoginPassword"));
        console.log("We have logged in");
    }
    catch(err) {
        console.log(err);
    }
    
})()