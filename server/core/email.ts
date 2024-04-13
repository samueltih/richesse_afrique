import nodemailer, { type SendMailOptions } from "nodemailer";
import { readdir, readFile } from "fs/promises";
import path from "path";
import Handlebars from "handlebars";

const configOptions = {
  host: process.env.SMTP_HOST || "smtp.freesmtpservers.com" ,
  port: 465,
  secure: true,
};

let transporter = nodemailer.createTransport(configOptions);

export function initTemplates() {
  return readdir(path.join(process.cwd(), "../../assets"), {
    withFileTypes: true,
  }).then((files) => {
    files
      .filter((file) => file.isFile() && file.name.endsWith(".handlebars"))
      .forEach((file) => {
        Handlebars.precompile(readFile(file.path));
      });
  });
}

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

/*
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'samuel.tih@outlook.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
*/