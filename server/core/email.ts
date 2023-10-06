import nodemailer, { SendMailOptions } from "nodemailer";

const configOptions = {
  host: "smtp.freesmtpservers.com",
  port: 465,
  secure: true,
};

let transporter = nodemailer.createTransport(configOptions);

export function sendMail(
  from: string,
  to: string[],
  subject: string,
  text?: string,
  html?: string
) {
  const mailOptions: SendMailOptions = {
    from,
    to,
    subject,
    text: text ?? "Sample Text",
    html: html ?? "Sample Html",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
}
