const User = require('../../model/user.model');

module.exports = {
  bookMark: (req, res) => {
    User.findByIdAndUpdate(
      req.body.userId,
      { $push: { bookmark: req.body.storyId } },
      err => {
        if (err) throw err;
        res.json({ success: true, message: 'Bookmark Added' });
      }
    );
  }
};
