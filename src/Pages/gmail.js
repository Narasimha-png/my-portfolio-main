import nodemailer from 'nodemailer';

// Create a transporter with your email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'settipallisrilakshminarasimha@gmail.com',
    pass: 'npzt rqna frpc vmbp',
  },
});

function sentdetails(email, firstName, lastName, message, address) {
  // Define your email options
  const mailOptions = {
    from: email,
    to: 'narasimhas9490@gmail.com',
    subject: 'Portfolio Contact Form',
    text: "Hello Me, " + firstName + " " + lastName + " informing to " + message + "\n Address: " + address,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// Export the function using ES6 export syntax
export { sentdetails };
