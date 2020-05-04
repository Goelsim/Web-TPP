let puppeteer = require("puppeteer");
let cFile = process.argv[2];
let fs = require("fs");
(async function () {
  try {
    let data = await fs.promises.readFile(cFile);
    let { url, pwd, user } = JSON.parse(data);
    let browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"]
    });
  
    let tabs = await browser.pages();
    let tab = tabs[0];
    await tab.goto(url, { waitUntil: "networkidle0" });
    await tab.waitForSelector("#input-1", { visible: true });
    await tab.type("#input-1", user, { delay: 100 });
    await tab.type("#input-2", pwd, { delay: 100 });
    //await tab.click("button[data-analytics=LoginPassword]");
    await Promise.all([tab.click("button[data-analytics=LoginPassword]"), tab.waitForNavigation({ waitUntil: "networkidle0" })]);
  
    await tab.waitForSelector("a[data-analytics=NavBarProfileDropDown]", { visible: true });
    await tab.click("a[data-analytics=NavBarProfileDropDown]");
    await Promise.all(
      [tab.waitForNavigation({ waitUntil: "networkidle0" }),
      tab.click("a[data-analytics=NavBarProfileDropDownAdministration]"),])
  
    await tab.waitForSelector(".administration header", { visible: true })
    let mTabs = await tab.$$(".administration header ul li a");

    await Promise.all(
      [tab.waitForNavigation({ waitUntil: "networkidle0" }),
      mTabs[1].click("a[data-analytics=NavBarProfileDropDownAdministration]"),]);

      await handleQuestion(tab, browser);
  }
  catch(err) {
    console.log(err);
  }
})();

async function handleQuestion(tab, browser) {
  await tab.waitForSelector(".backbone.block-center");
  let qnocPage = await tab.$$(".backbone.block-center");
  let pArr = [];
  for(let i = 0; i < qnocPage.length; i++) {
    let newTab = await browser.newPage();
    let href = await tab.evaluate(function (elem) {
      return elem.getAttribute("href");
    }, qnocPage[i]);
    let mWillAddedPromisetocQ = handleSingleQuestion(newTab, "https://www.hackerrank.com" + href);
    pArr.push(mWillAddedPromisetocQ);
  }
  await Promise.all(pArr);
}

async function handleSingleQuestion(newTab, link) {
  
  await newTab.goto(link);
}