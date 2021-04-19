const nodemailer = require('nodemailer')
const { google } = require('googleapis')

module.exports = {
    sendEmail: async (args, req) => {
        const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL)
        oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN})

        try {
            const accessToken = await oAuth2Client.getAccessToken()
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: process.env.EMAIL,
                    clientId: process.env.CLIENT_ID,
                    clientSecret: process.env.CLIENT_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN,
                    accessToken: accessToken
                }
            })
            const emailForm = args.emailForm
            const mailOptions = {
                from: process.env.EMAIL,
                to: 'ahjaperearst@gmail.com',
                subject: emailForm.subject,
                replyTo: emailForm.replyTo,
                text: emailForm.text,
                html: emailForm.text
            }
            await transporter.sendMail(mailOptions);
            return {
                response: "Email sent!"
            }
        } catch (err) {
            console.log(err)
        }
    }
}