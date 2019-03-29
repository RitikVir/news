const express = require('express');
const app = express();
const fileSystem = require('../../middlewares/multer/multer.middleware');

const clientController = require('./client.controller');

app.post('/requestpoll', clientController.requestPoll);

app.post(
  '/requeststory',
  fileSystem.fileUploads,
  clientController.requestStory
);

app.post(
  '/addpollimage/:id',
  fileSystem.fileUploads,
  clientController.addPollImage
);

app.post('/paymentstatus', clientController.paymentStatus);
app.post('/makepayment', clientController.makePayment);

module.exports = app;
