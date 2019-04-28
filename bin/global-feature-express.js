#!/usr/bin/env node

const express = require("express");
const path = require("path");
const reader = require("../lib/reader.js");
const localeHandler = require("../lib/locale-handler");

const app = express();

const featurebookEndPoint = "/";
const envPath = process.argv[2] || "./";
const language = localeHandler.getValidLanguage(process.argv[3] || process.env.LANG);
const port = process.argv[4] || process.env.PORT || 3000;
const jiraUrlBase = process.argv[5] || null;
const boardAcronym = process.argv[6] || null;

app.use(express.static(path.join(__dirname, "..", "assets")));
app.use('/js/locales.js', express.static(path.join(__dirname, "..", "lib", "locales.js")));

app.set("views", path.join(__dirname, "..", "views"));
app.engine("html", require("ejs").renderFile);

app.get(featurebookEndPoint, (req, res) =>
  reader
    .generateHashOfFilesByPath(envPath)
    .then(
      contentFeature =>
        contentFeature == undefined || Object.keys(contentFeature).length == 0
          ? res.render("error-page.html", {
              err: "Feature files or Directory dont exist!"
            })
          : res.render("index.html", {
              contentFeature,
              language,
              jiraUrlBase,
              boardAcronym
            })
    )
);

if(!process.env.BUILD_MODE) {
  app
  .listen(port, function() {
     console.log(
      "Feature-Express is running at " +
        "http://localhost:" +
        port +
        featurebookEndPoint
    );
  })
  .on("error", function(err) {
    if (err.errno === "EADDRINUSE") {
      console.log(
        "Port " + port + " is already in use, please choose another port!"
      );
    }
  });

}

module.exports = app;
