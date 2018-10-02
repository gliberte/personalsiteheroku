import nodemailer from 'nodemailer'
import config from '../config'
import promisify from 'es6-promisify'

const transport = nodemailer.createTransport({
    host:config.MAIL_HOST,
    port:config.MAIL_PORT,
    auth:{
        user:config.MAIL_USER,
        pass:config.MAIL_PASS
    }
})

export const send = (options)=>{
    const mailOptions = {
        from:`Luis Solano <luis.solano.l@gmail.com`,
        to:options.email,
        subject:options.subject,
        html:'Esto se llenará despues',
        text:'Esto se llenara luego'
    }
    return transport.sendMail(mailOptions)
}
