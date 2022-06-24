import React from 'react';
import '@styles/RecoveryPassword.scss';
import Logo from '@logos/logo_yard_sale.svg';
import EmailImg from '@icons/email.svg';

const RecoveryPassword = () => {
    return (
        <div className="login">
        <div className="form-container form-email">
            <img src={Logo} alt="logo" className="logo"/>
            <h1 className="title">El Email Fue Enviado</h1>
            <p className="subtitle">Por favor verifica tu bandeja de entrada para mas instrucciones de reinicio de contraseña</p>
            <div className="email-img">
                <img src={EmailImg} alt="email"/>
            </div>
            <button className="primary-btn login-btn">Login</button>
            <p className="resend">
                <span>No ha recibido el correo? </span>
                <a href="/">Reenviar</a>
            </p>
        </div>
    </div>
    );
}

export { RecoveryPassword }
