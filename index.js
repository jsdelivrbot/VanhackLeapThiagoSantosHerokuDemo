const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 2812
const jsonSrc = "https://raw.githubusercontent.com/Clavicus/Testing-Requests/master/canadian-provinces.json";

function LoadData()
{
  
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res) {
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
  //.get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

