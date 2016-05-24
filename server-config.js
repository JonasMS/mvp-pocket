'use-strict'

const express = require('express');
const bodyParser = require('body-parser');
const extractor = require('unfluff');
const request = require('request');
const utils = require('./utils/config-helpers.js')
// const multer = require('multer');

const app = express();
// const upload = multer();
//Middleware
app.use(bodyParser.json());


//Load Static Files
//TODO: Find a cleaner way to server files to user
app.use('/compiled/components', express.static(__dirname + '/compiled/components'));

app.use('/compiled', express.static(__dirname + '/compiled'));

app.use(express.static(__dirname + '/client'));


//Routing
app.post('/saveArticle', function(req, res, next) {
  //get article content
  request("http://www.bloomberg.com/features/2016-johny-srouji-apple-chief-chipmaker/", function( err, response, body) {
    if (err) { return res.sendStatus(500); }

    let data = extractor(body);

    //replace \n with '<br>'
    // data.text = utils.sourceToHTML(data.text);
    // console.log(data.text);

    //save article content to db

    //send file to React
    res.status(201).send(data);
  });

});
//build new document w/ article content
//send user to new document

//on submit, get data from webscraper

module.exports = app;