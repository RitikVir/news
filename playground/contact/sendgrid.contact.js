const sgMail = require('@sendgrid/mail');
const key = require('../../key');

sgMail.setApiKey(key.email);

module.exports = {
  sendEmail: user => {
    const msg = {
      to: user.email,
      from: 'support@indiaknows.com',
      subject: 'Login Details',
      text: `Your Account is activated for ${
        key.website
      } \n Login Credentials are \n PhoneNumber::${
        user.phoneNumber
      }\n Password::${user.password}\n Please do not share the details`
    };
    sgMail.send(msg, (err, res) => {
      if (err) console.log(err);
      console.log(res);
    });
  }
};
