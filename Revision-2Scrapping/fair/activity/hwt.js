let request = require("request");
let fs = require("fs");
let cheerio = require('cheerio');
console.log("*****Sending Request*****");
request("https://www.espncricinfo.com/series/19322/scorecard/1187683", function (err, res, html) {
    if (err == null && res.statusCode == 200) {
        console.log("*****Received Data******");
        fs.writeFileSync("scorecard.html", html);
        parseHtml(html);
    }
    else if (res.statusCode == 404) {
        console.log("Invalid URL");
    }
    else {
        console.log(err);
        console.log(res.statusCode);
    }
})

function parseHtml(html) {
    console.log("*****parsing Html*****");
    let d = cheerio.load(html);
    let bowlers = d(".scorecard-section.bowling table tbody tr");

    let maxWicket = 0;
    let maxWicketBowler = "";

    for(let i = 0; i < bowlers.length; i++) {
        let bowlerName = d(d(bowlers[i]).find("td")[0]).text();
        let wickets = d(d(bowlers[i]).find("td")[5]).text();
        console.log(bowlerName + "\t" + wickets);
        if(wickets > maxWicket) {
            maxWicket = wickets;
            maxWicketBowler = bowlerName;
        }
        
    }
    console.log("`````````````````````````````````````");
    console.log(maxWicketBowler + "\t" + maxWicket);
    fs.writeFileSync("bowling.html", bowlers);
}
