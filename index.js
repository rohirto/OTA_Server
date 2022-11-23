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

const LAST_VERSION = 'v12'
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

const BEDROOM_LAST_VERSION = '1.3.1'
app.get("/bed_room_update", function (req, res) {
    console.log(req.headers);

   var version = req.get('x-ESP8266-version');
    if (version !== BEDROOM_LAST_VERSION) {
        res.sendFile(__dirname + "/firmware/bedroom_nodemcu/latest.bin");
    } else {
        console.log("No new version");
      res.writeHeader(304);  
      res.end();
   }
});

const ONE_RELAY_LAST_VERSION = '1.0.1'
app.get("/one_relay_update", function (req, res) {
    console.log(req.headers);

   var version = req.get('x-ESP8266-version');
    if (version !== ONE_RELAY_LAST_VERSION) {
        res.sendFile(__dirname + "/firmware/one_relay/latest.bin");
    } else {
        console.log("No new version");
      res.writeHeader(304);  
      res.end();
   }
});

const FOUR_REALY_LAST_VERSION = '1.0.2'
app.get("/four_relay_update", function (req, res) {
    console.log(req.headers);

   var version = req.get('x-ESP8266-version');
    if (version !== FOUR_REALY_LAST_VERSION) {
        res.sendFile(__dirname + "/firmware/four_relay/latest.bin");
    } else {
        console.log("No new version");
      res.writeHeader(304);  
      res.end();
   }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})