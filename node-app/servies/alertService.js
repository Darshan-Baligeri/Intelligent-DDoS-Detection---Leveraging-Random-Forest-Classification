// services/alertService.js
const nodemailer = require('nodemailer');

let alertEmail = 'default@example.com'; // Default email if none is provided

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'baligeri.darshan@gmail.com',
        pass: 'peil jiue kfto stcg'
    }
});

const sendAlert = (message) => {
    const mailOptions = {
        from: 'baligeri.darshan@gmail.com',
        to: alertEmail, // Use the dynamic alert email
        subject: 'DDoS Attack Alert',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error('Error sending email:', error);
        }
        console.log('Alert email sent:', info.response);
    });
};

// Function to update the alert email
const updateAlertEmail = (newEmail) => {
    alertEmail = newEmail;
};

module.exports = { sendAlert, updateAlertEmail };
