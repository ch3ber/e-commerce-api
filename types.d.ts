export type EmailBody = {
  from: string | undefined,
  to: string | string[], // list of receivers
  subject: string,
  text: string, // plain text body
  html: string // html body
}
