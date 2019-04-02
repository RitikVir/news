const Login = require('../../model/login.model');
const User = require('../../model/user.model');
const jwt = require('jsonwebtoken');
const password = require('../../playground/password.playground');

module.exports = {
  doLogin: (req, res) => {
    let loginInfo = new Login(req.body);
    if (!loginInfo) {
      res.status(400).send('Bad inputs');
    } else {
      Login.findOne(
        {
          phoneNumber: req.body.phoneNumber
        },
        (err, userData) => {
          if (err) throw err;
          else if (!userData) return res.json({ token: null });
          else {
            password.decryptPassword(
              req.body.password,
              userData.password,
              isMatch => {
                if (!isMatch) {
                  res.json({ token: null });
                } else {
                  if (userData.role === 'user') {
                    User.findById(userData.userId, (cerr, userDetail) => {
                      if (cerr) throw cerr;
                      let token = jwt.sign(
                        {
                          role: userData.role,
                          userId: userData.userId,
                          isVerifiedOtp: userDetail.isVerifiedOtp
                        },
                        'secretkey',
                        {
                          expiresIn: 1200
                        }
                      );
                      res.status(200).json({ token: token });
                    });
                  } else {
                    let token = jwt.sign(
                      { role: userData.role, userId: userData.userId },
                      'secretkey',
                      {
                        expiresIn: 1200
                      }
                    );
                    res.status(200).json({ token: token });
                  }
                }
              }
            );
          }
        }
      );
    }
  },

  checkAlreadyRegistered: (req, res) => {
    User.findOne({ email: req.params.email }, (err, userInfo) => {
      if (err) throw err;
      if (userInfo) {
        let token = jwt.sign(
          {
            role: 'user',
            userId: userInfo.userId,
            isVerifiedOtp: userInfo.isVerifiedOtp
          },
          'secretkey',
          {
            expiresIn: 1200
          }
        );
        res.json({ token: token });
      } else res.json({ token: null });
    });
  }
};
