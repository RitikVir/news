const express = require('express');
const writerController = require('./writer.controller');
const app = express();

app.post('/profile', writerController.getProfile);

module.exports = app;
