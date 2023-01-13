import nodemailer from 'nodemailer'
import { config } from '#config/config.js'

export class EmailSender {
  static #createTransport () {
    return nodemailer.createTransport({
      host: config.recoveryServiceHost,
      secure: true,
      port: 465,
      auth: {
        user: config.recoveryServiceEmail,
        pass: config.recoveryServicePassword
      }
    })
  }

  static async sendEmail (emailBody) {
    const transporter = this.#createTransport()
    await transporter.sendMail(emailBody)

    return {
      message: 'mail sent'
    }
  }
}
