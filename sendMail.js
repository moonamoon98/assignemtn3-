const nodemailer = require('nodemailer')
var MAIL_USER = "moonamoon9898@gmail.com"
var PASSWORD = "zudbawu98"

// The credentials for the email account you want to send mail from.
const credentials = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: MAIL_USER,
    pass: PASSWORD
  }
}

const transporter = nodemailer.createTransport(credentials)
module.exports = async (to, content) => {
  const contacts = {
    from: MAIL_USER,
    to
  }
  const email = Object.assign({}, content, contacts)
  transporter.sendMail(email)
}
