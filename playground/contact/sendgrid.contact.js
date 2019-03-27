const sgMail = require("@sendgrid/mail");
const key = require("../../key");

sgMail.setApiKey(key.email);

const password=require("../password.playground");
let pass='1234';
   password.encryptPassword(pass,(res)=>{
   console.log("Return ed is ",res);
 });





module.exports = {
  sendEmail: (client) => {
    
    
    const msg = {
      to: receiver,
      from: "support@atsgem.in",
      subject: "Ats Support",
      text: info
    };
    sgMail.send(msg, (err, res) => {
      if (err) console.log(err);
      console.log(res);
    });
  }
};
