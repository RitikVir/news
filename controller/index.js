const express = require('express');
const router = express.Router();
const adminRouter = require('./admin/index');
const clientRouter = require('./client/index');
const loginRouter = require('./login/index');
const pollRouter = require('./poll/index');
const storyRouter = require('./story/index');
const writerRouter = require('./writer/index');
const userRouter = require('./user/index');

router.use('/admin', adminRouter);
router.use('/client', clientRouter);
router.use('/login', loginRouter);
router.use('/poll', pollRouter);
router.use('/story', storyRouter);
router.use('/writer', writerRouter);
router.use('/user', userRouter);

module.exports = router;
