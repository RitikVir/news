const Poll = require('../../model/poll.model');

module.exports = {
  addPoll: (req, res) => {
    console.log(req.body);
    let newPoll = new Poll();
    newPoll.heading = req.body.heading;
    newPoll.detail = req.body.detail;
    newPoll.authorId = req.body.authorId;
    newPoll.authorRole = req.body.authorRole;
    newPoll.lastDate = req.body.lastDate;
    newPoll.imageUrl = req.files.imageUrl[0].filename;
    newPoll.postiveCount = newPoll.negativeCount = newPoll.neutralCount = 0;
    newPoll.save(err => {
      if (err) throw err;
      res.json({ success: true, message: 'Poll saved successfully' });
    });
  }
};
