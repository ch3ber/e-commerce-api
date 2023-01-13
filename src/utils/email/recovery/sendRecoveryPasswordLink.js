import { config } from '#config/config.js'
import { EmailSender } from '../emailSender.js'
import { GenerateRecoveryLink } from './generateRecoveryLink.js'

export class SendRecoveryPasswordLink {
  static async send (userEmail) {
    const recoveryLink = await GenerateRecoveryLink.generate(userEmail)

    const emailBody = {
      from: config.recoveryServiceEmail,
      to: `${userEmail}`, // list of receivers
      subject: `Reset passowrd for ${userEmail} in SecretDM`, // Subject line
      text: 'Este email es para cambiar la constraseña de tu cuenta en SecretDM, si no solicisateste ningún cambio de contraseña ignora este correo', // plain text body
      html: `<b>Ingresa a este <a href="${recoveryLink}">link</a> para cambiar la contraseña</b>` // html body
    }

    const response = EmailSender.sendEmail(emailBody)
    return response
  }
}
