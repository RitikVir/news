const express = require('express');
const app = express();
const fileSystem = require('../../middlewares/multer/multer.middleware');

const pollController = require('./poll.controller');

app.post('/addPoll', fileSystem.fileUploads, pollController.addPoll);

module.exports = app;
