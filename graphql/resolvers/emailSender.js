const nodemailer = require('nodemailer')

module.exports = {
    sendEmail: (args, req) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        const emailForm = args.emailForm
        let mailOptions = {
            from: process.env.EMAIL,
            to: 'ahjaperearst@gmail.com',
            subject: emailForm.subject,
            replyTo: emailForm.replyTo,
            text: emailForm.text,
            html: emailForm.text
        }
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                throw new err
            } else {
                console.log("email sent")
            }
        })
        return {
            response: "Email sent"
        }
    }
}