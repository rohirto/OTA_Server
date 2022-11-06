const express = require('express')

const app = express()
const port = 3000
var path = require('path');
var fs = require("fs");
var md5 = require("md5-file");

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('GET');
})

const LAST_VERSION = 'v9'
app.get("/updater", function (req, res) {
    console.log(req.headers);

   var version = req.get('x-ESP8266-version');
    if (version !== LAST_VERSION) {
        res.sendFile(__dirname + "/firmware/updates/latest.bin");
    } else {
        console.log("No new version");
      res.writeHeader(304);  
      res.end();
   }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})