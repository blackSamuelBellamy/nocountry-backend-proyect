require('colors')
const { Resend } = require('resend')
const {
  newsletter,
  updateMail,
  welcome
} = require('./spreadsheet')

const sendingMail = async (email, type, name = '', token = '') => {
  try {
    const resend = new Resend(process.env.RESEND_KEY)
    const url = process.env.EMAIL_PATH
    let message = ''

    switch (type) {
      case 'newsletter':
        message = newsletter()
        break
      case 'update':
        message = updateMail(name, token, url)
        break
      case 'welcome':
        message = welcome(name, token, url)
        break
    }
    const correo = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: message.title,
      html: message.body
    })
    if (!correo.error) {
      console.log('E-mail sent successfully'.green)
      return true

    }
  }
  catch (e) {
    console.log('ERROR!'.red, e.red)
    return false
  }

}

module.exports = sendingMail
