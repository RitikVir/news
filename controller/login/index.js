const express = require('express');
const app = express();
const loginController = require('./login.controller');

app.post('/', loginController.doLogin);

module.exports = app;
