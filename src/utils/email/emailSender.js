import nodemailer from 'nodemailer'
import boom from '@hapi/boom'

import { User } from '#db/models/user.model.js'
import { config } from '#config/config.js'

export class EmailSender {
  static async #validUserByEmail (email) {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw boom.unauthorized()
    }

    return user
  }

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

  static async sendEmail (email) {
    const user = await this.#validUserByEmail(email)
    const transporter = this.#createTransport()

    await transporter.sendMail({
      from: config.recoveryServiceEmail,
      to: `${user.email}`, // list of receivers
      subject: 'Este es un nuevo correo', // Subject line
      text: 'Hola mundo', // plain text body
      html: '<b>Hola mundo</b>' // html body
    })

    return {
      message: 'mail sent'
    }
  }
}
