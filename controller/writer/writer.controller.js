const Writer = require('../../model/writer.model');
const Poll = require('../../model/poll.model');

module.exports = {
  getProfile: (req, res) => {
    try {
      Writer.findById(req.body.userId, (err, writerInfo) => {
        if (err) throw err;
        res.json({ success: true, writerInfo });
      });
    } catch (e) {
      console.log(e);
      res.json({ success: false, message: 'Error loading profile' });
    }
  },

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
  },

  addStory: (req, res) => {
    let newStory = new Story();
    newStory.heading = req.body.heading;
    newStory.detail = req.body.detail;
    newStory.imageUrl = req.files.imageUrl[0].filename;
    newStory.authorId = req.body.authorId;
    newStory.authorRole = req.body.authorRole;
    newStory.views = req.body.views;
    newStory.storyUrl = req.body.storyUrl;
    newStory.isActive = true;

    newStory.save(err => {
      if (err) throw err;
      try {
        Writer.findByIdAndUpdate(
          req.body.authorId,
          { $inc: { storyCount: 1 } },
          err => {
            if (err) throw err;
            res.json({ success: true, message: 'Story added successfully' });
          }
        );
      } catch (e) {
        res.json({ success: false, message: 'Error adding story' });
      }
    });
  }
};
