const Poll = require('../../model/poll.model');

module.exports = {
  addPoll: (req, res) => {
    const newPoll = new Poll(req.body);
    newPoll.save(err => {
      if (err) throw err;
      res.json({ success: true, message: 'Poll saved successfully' });
    });
  }
};
