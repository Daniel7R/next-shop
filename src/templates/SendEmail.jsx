import React from 'react';
import Logo from '@logos/logo_yard_sale.svg';
import EmailIcon from '@icons/email.svg';
import '@styles/SendEmail.scss';

const SendEmail = () => {
    return (
        <div className='login'>
            <div className="form-container form-email">
                <img src={Logo} className='logo' alt="logo"/>
                <h1 className='title'>El email fue enviado</h1>
                <p className='subtitle'>Por favor verifica tu bandeja de entrada</p>
                <div className='email-img'>
                    <img src={EmailIcon} alt="email" />
                </div>
                <button className='primary-btn login-btn'>Login</button>
                <p className='resend'>
                    <span>¿No ha recibido el correo?</span>
                    <a href="/">Reenviar</a>
                </p>
            </div>
        </div>
    )
}

export {SendEmail}
