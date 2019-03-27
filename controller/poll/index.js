const express = require('express');
const app = express();

const pollController = require('./poll.controller');

app.post('/addPoll', pollController.addPoll);

module.exports = app;
