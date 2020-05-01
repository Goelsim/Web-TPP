let puppeteer = require("puppeteer");
let cFile = process.argv[2];
let fs = require("fs");
(async function () {
    let browser = await puppeteer.launch ( {
        headless : false,
        defaultViewport : null,
        slowMo : 100,
        args : ["--start-maximized"]
    });
    let pages = await browser.pages();
    let page = pages[0];
    let data = await fs.promises.readFile(cFile);
    let { url, pwd, user } = JSON.parse(data);
    //console.log(user + " " + pwd);
    await page.goto(url, { waitUntil : "networkidle0" });
    await page.type("#input-1", user);
    await page.type("#input-2", pwd);
    // let uWillBeTypedP = page.type("#input-1", user);
    // let pWillBeTypedP = page.type("#input-2", pwd);
    // await Promise.all([uWillBeTypedP, pWillBeTypedP]);
    await page.click("button[data-anayltics=LoginPassword]");
    await page.waitForNavigation({ waitUntil : "networkidle0" })
    await page.waitForSelector("a[data-anayltics=NavBarProfileDropDown]", {visible : true});
    await page.click("a[data-anayltics=NavBarProfileDropDown]");
    await page.click("a[data-anayltics=NavBarProfileDropDownAdministration]");
    await waitForLoader(page);
    let tabs = await page.$$(".administration header ul li");
    await tabs[1].click();
    let mpUrl = await page.url();
    let qidx = 0;
    while(true) {
        let question = await getMeQuestionElement(page, qidx, mpUrl);
        if(question == null) {
            console.log("All Questions processed");
            return;
        }
        //await handleQuestion(page, question, process.argv[3]);
        qidx++;
    }
})();

async function getMeQuestionElement(page, qidx, mpUrl) {
    let pidx = Math.floor(qidx / 10);
    let pQidx = qidx % 10;
    console.log(pidx + " " + pQidx);
    await page.goto(mpUrl);
    await waitForLoader(page);
    //await page.waitForNavigation({ waitUntil : "networkidle0"});
    await page.waitForSelector(".pagination ul li", { visible : true});
    let paginations = await page.$$(".pagination ul li");
    let nxtBtn = paginations[paginations.length - 2];
    let className = await page.evaluate(function (el) {
        return el.getAttribute("class");
    }, nxtBtn);
    for(let i = 0; i < pidx; i++) {
        if (className == "disabled") {
            return null;
        }        
        await nxtBtn.click();
        await page.waitForSelector(".pagination ul li", { visible : true});
        paginations = await page.$$(".pagination ul li");
        nxtBtn = paginations[paginations.length - 2];
        className = await page.evaluate(function (el) {
            return el.getAttribute("class");
        }, nxtBtn);
    }
    let challengeList = await page.$$(".backbone.block-center");
    if(challengeList.length > pQidx) {
        return challengeList[pQidx];
    }
    else {
        return null;
    }
}

async function waitorLoader (page) {
    await page.waitForSelector("#ajax-msg", {
        visible : false
    });
}

