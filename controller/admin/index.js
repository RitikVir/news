const express = require('express');
const app = express();
const adminController = require('./admin.controller');

app.post('/addclient', adminController.addClient);

app.post('/addwriter', adminController.addWriter);

app.get('/publishstory', adminController.getStory);

app.get('/publishpoll', adminController.getPoll);

app.post('/publishstory', adminController.publishStory);

app.post('/publishpoll', adminController.publishPoll);

module.exports = app;
