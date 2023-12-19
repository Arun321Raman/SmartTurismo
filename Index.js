const express = require('express');
        const app = express();
        const port = 3000;
        const fs = require('fs');
        var info = []

//setup for dynamic data webpage
        app.set('view engine', 'ejs');

        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });

        app.use(express.static('public'));

//send pred.js when requested
        app.get('/pred.js', function(req, res) {
            res.sendFile(__dirname + '/pred.js');
        });

//display the data page when requested
        app.get('/data', function (req, res) {
            res.render('pages/data', {
                // EJS variable and server-side variable
                // displays as one big block of information, doesn't update in real time (needs a page refresh)
                info: info
            });
        });


        app.use(express.text())

// receiving the navigator.sendBeacon request
        app.post('/',function(req,res){
            console.log('i got the request',req.body)
            var reqBody = JSON.parse(req.body);
            var rawA = reqBody.b;
            var rawG = reqBody.a;
            var rawWC = reqBody.g;
            var rawPC = reqBody.i;
                
//calculations for the actual predictions, based on regression
var standardA = (rawA - 13.47826087)/16.62;
var standardG = (rawG - 0.6086956522)/1.90;
if (((508.341 * standardA) + (139.125 * standardG) - 31.186) >= 0){
var finalPred = "YES"}
else {var finalPred = "NO"};

var now = new Date();
var tzo = -now.getTimezoneOffset();
var dif = tzo >= 0 ? '+' : '-';
var pad = function(num) {
        var norm = Math.abs(Math.floor(num));
        return (norm < 10 ? '0' : '') + norm;
};
                
var formattedTime = now.getFullYear()
                + '-' + pad(now.getMonth()+1)
                + '-' + pad(now.getDate())
                + ' (' + pad(now.getHours()-5)
                + ':' + pad(now.getMinutes()) + ')';
                
//add the formatted information to the data page
        info.push("Date (Time):   " + formattedTime + "      |    Where:   " + reqBody.url + "      |    Prediction:   " + finalPred + " - WordCount: " + rawWC + " - PictureCount: " + rawPC)
        });

        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)})
