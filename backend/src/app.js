const express = require('express');
const router = require('./router');
const app = express();

global.clientIpAddress = null;
global.userID = null;
global.userConsultant = null;
global.creciConsultant = null;
global.imovConsultant = null;

app.use(router);

module.exports = app;