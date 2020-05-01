let puppeteer = require("puppeteer");
(async function () {
    let browser = await puppeteer.launch ( {
        headless : false,
        defaultViewport : null,
        args : ["--incognito", "--start-maximized"]
    });
    let pages = await browser.pages();
    let page = pages[0];
    await page.goto("http://www.google.com");
})();