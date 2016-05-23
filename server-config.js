'use-strict'

const express = require('express');
const app = express();

app.use('/node_modules/react/dist', express.static(__dirname + '/node_modules/react/dist/react.js'));

app.use('/node_modules/react-dom/dist', express.static(__dirname + '/node_modules/react-dom/dist/'));

app.use('/compiled/components', express.static(__dirname + '/compiled/components'));

app.use('/compiled', express.static(__dirname + '/compiled'));

app.use(express.static(__dirname + '/client'));

// app.get('/')

module.exports = app;