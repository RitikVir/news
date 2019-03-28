const User = require('../../model/user.model');
const Login = require('../../model/login.model');
const bcrypt = require('../../playground/password.playground');

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
  },

  signUp: (req, res) => {
    let newUser = new User(req.body);
    newUser.save(err => {
      if (err) throw err;
      //   let loginInfo = new Login(req.body);
      //   loginInfo.role = 'user';
      //   loginInfo.userId = newUser._id;
      //   loginInfo.save(err => {
      //     if (err) throw err;
      //     res.json();
      //   });
      bcrypt.encryptPassword(req.body.password, data => {
        let loginInfo = new Login(req.body);
        loginInfo.password = data;
        loginInfo.userId = newUser._id;
        loginInfo.role = 'user';
        loginInfo.save(err => {
          if (err) throw err;
          res.json();
        });
      });
    });
  }
};