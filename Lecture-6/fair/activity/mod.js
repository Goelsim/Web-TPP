let fs = require("fs");
require("chromedriver");
let swd = require("selenium-webdriver");
let bldr = new swd.Builder();
let driver = bldr.forBrowser("chrome").build();

let cFile = process.argv[2];
let questionsFile = process.argv[3];
(async function () {
  try {
    // ******************************************Login****************************
    // selenium 
    await loginHelper();

    // ************************dashboard**********************************
    let DropDownBtn = await driver.findElement(swd.By.css("a[data-analytics=NavBarProfileDropDown]"))
    await DropDownBtn.click();
    let adminLinkanchor = await driver.findElement(swd.By.css("a[data-analytics=NavBarProfileDropDownAdministration]"));
    await adminLinkanchor.click();
    // loaders=> 
    // ***************************************Manage challenges******************************************
    // let adminPageUrl = await adminLinkanchor.getAttribute("href");
    // await driver.get(adminPageUrl);
    // stale element => selected elements were in the page but they are not currently here
    await waitForLoader();
    let manageTabs = await driver.findElements(swd.By.css(".administration header ul li"));
    await manageTabs[1].click();

    let ManageChallengePage = await driver.getCurrentUrl();
    let questions = require(questionsFile);
    // // Json file read
    // for (let i = 0; i < questions.length; i++) {
    //   await driver.get(ManageChallengePage)
    //   await waitForLoader();
    //   await createNewChallenge(questions[i]);
    // }

    await loadDetailPage(ManageChallengePage)
    // content 
    // createchallenge
    // console.log("All code editor have some data");
    // await driver.executeScript("alert('Hello All')"); 
    //challenge Name 
    // Description
    // Problem Statement
    // Input Format
    // Constraints
    // Output Format
    //Tags
    // save changes
    //  manage tabs
  } catch (err) {
    console.log(err);
  }
})()

async function createNewChallenge(question) {
  let createChallenge = await driver.findElement(swd.By.css(".btn.btn-green.backbone.pull-right"));
  await createChallenge.click();
  await waitForLoader();
  // opertion => selection ,data entry
  let eSelector = ["#name", "textarea.description", "#problem_statement-container .CodeMirror div textarea", "#input_format-container .CodeMirror textarea", "#constraints-container .CodeMirror textarea", "#output_format-container .CodeMirror textarea", "#tags_tag"];
  // elementwillBefoundpromise
  // let AllSelectors = [];
  // for (let i = 0; i < eSelector.length; i++) {
  //   let elemWillBeFoundPromise =driver.findElement(swd.By.css(eSelector[i]));
  //   AllSelectors.push(elemWillBeFoundPromise);
  // }
  let eWillBeselectedPromise = eSelector.map(function (s) {
    return driver.findElement(swd.By.css(s));
  })
  let AllElements = await Promise.all(eWillBeselectedPromise);
  // submit name ,description
  let NameWillAddedPromise = AllElements[0].sendKeys(question["Challenge Name"]);
  let descWillAddedPromise = AllElements[1].sendKeys(question["Description"]);

  await Promise.all([NameWillAddedPromise, descWillAddedPromise]);
  // console.log("name and desc added");
  // code editor
  await editorHandler("#problem_statement-container .CodeMirror div", AllElements[2], question["Problem Statement"]);
  await editorHandler("#input_format-container .CodeMirror div", AllElements[3], question["Input Format"]);
  await editorHandler("#constraints-container .CodeMirror div", AllElements[4], question["Constraints"]);
  await editorHandler("#output_format-container .CodeMirror div", AllElements[5], question["Output Format"]);
  // tags
  let TagsInput = AllElements[6];
  await TagsInput.sendKeys(question["Tags"]);
  await TagsInput.sendKeys(swd.Key.ENTER);
  // submit 
  let submitBtn = await driver.findElement(swd.By.css(".save-challenge.btn.btn-green"))
  await submitBtn.click();

}


async function loginHelper() {
  await driver.manage().setTimeouts({ implicit: 30000, pageLoad: 30000 })
  let data = await fs.promises.readFile(cFile);
  let { url, pwd, user } = JSON.parse(data);
  // Login page
  await driver.get(url);
  let unInputWillBeFoundPromise = driver.findElement(swd.By.css("#input-1"));
  let psInputWillBeFoundPromise = driver.findElement(swd.By.css("#input-2"));
  let unNpsEl = await Promise.all([unInputWillBeFoundPromise, psInputWillBeFoundPromise]);
  let uNameWillBeSendPromise = unNpsEl[0].sendKeys(user);
  let pWillBeSendPromise = unNpsEl[1].sendKeys(pwd);
  await Promise.all([uNameWillBeSendPromise, pWillBeSendPromise]);
  let loginBtn = await driver.findElement(swd.By.css("button[data-analytics=LoginPassword]"));
  await loginBtn.click();
}


async function editorHandler(parentSelector, element, data) {
  let parent = await driver.findElement(swd.By.css(parentSelector));
  // selenium => browser js execute 
  await driver.executeScript("arguments[0].style.height='10px'", parent);
  await element.sendKeys(data);
}




async function loadDetailPage(ManageChallengePage) {
  let divList = await driver.findElements(swd.By.css(".backbone.block-center"))
  for (let i = 0; i < divList.length; i++) {
    // let divList = await driver.findElements(swd.By.css(".backbone.block-center"))
    let link = divList[i].getAttribute("href");
    await addModerator(link);
    await driver.get(ManageChallengePage)
    await waitForLoader();
  }
  console.log(divList);
}

async function addModerator(link) {
  await driver.get(link);
  await waitForLoader()
  await driver.wait(swd.until.elementLocated(swd.By.css(".tag")))
  let allTabs = await driver.findElements(swd.By.css(".nav-tabs.nav.admin-tabbed-nav.row li"));
  await allTabs[1].click();
  await waitForLoader();

  let inputField = await driver.findElement(swd.By.css("#moderator"));
  await inputField.sendKeys("goelsimran10");
  let addBtn = await driver.findElement(swd.By.css(".btn.moderator-save"));
  await driver.wait(swd.until.elementLocated(swd.By.css(".hacker-container")))
  await addBtn.click();
  let saveBtn = await driver.findElement(swd.By.css(".save-challenge.btn.btn-green"));
  await saveBtn.click();
  await waitForLoader();
}



async function waitForLoader() {
  let loader = await driver.findElement(swd.By.css("#ajax-msg"));
  await driver.wait(swd.until.elementIsNotVisible(loader));
}