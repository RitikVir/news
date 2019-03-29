const express = require('express');
const controller = require('./poll.controller');
const router = express.Router();

router.post('/', controller.getPolls);

module.exports = router;
