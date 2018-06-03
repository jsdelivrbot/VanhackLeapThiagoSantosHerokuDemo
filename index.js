const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 2812
const jsonSrc = "https://raw.githubusercontent.com/Clavicus/Testing-Requests/master/canadian-provinces.json";

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  
  .get('/', function(req, res) { //Index
    var request = require('request')
    var EventEmitter = require("events").EventEmitter;
    var body = new EventEmitter();
    
    var provincesJSON = "https://raw.githubusercontent.com/Clavicus/Testing-Requests/master/canadian-provinces.json";
    
    request({
      url: provincesJSON,
      json: true
    }, function (error, response, data) {
        if (!error && response.statusCode === 200)
          body.data = data;
        else
          body.data = null;

        body.emit('update');
    });

    body.on('update', function () {
      res.render('pages/index', {
          provinces: body.data,
      });
    });
  })

  
  .get('/todnewmembers', function(req, res) { //TOD New Members

    var request = require('request')
    var EventEmitter = require("events").EventEmitter;
    var body = new EventEmitter();
    
    var provincesJSON = "";

    var herokuConnectRequest = require('request'),
        username = "2b621c92c3134529a43c89c7cba55a60",
        password = "e79bbd85875a49a3a220eb681ff13674",
        url = "https://odata-us.heroku.com/odata/v4/815469ec3fe040758596b294ec98c1e5/salesforce$candidate__c?$filter=progress__c%20eq%20%27Offer%20Letter%20Accepted%27",
        auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
    
    request({
      url: url,
      json: true,
      headers : {
        "Authorization" : auth
      }
    }, function (error, response, data) {
        if (!error && response.statusCode === 200)
          body.data = data;
        else
          body.data = null;

        body.emit('update');
    });

    body.on('update', function () {
      console.log(body.data.value);

      res.render('pages/todnewmembers', {
          members: body.data.value,
      });
    });


  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

