import React from 'react';
import Logo from '@logos/logo_yard_sale.svg';
import '@styles/NewPassword.scss';

const NewPassword = () => {
    return (
        <div className='new-password'>
            <div className="new-password-container">
                <img src={Logo} alt="logo" className='logo' />
                <h1 className="title">Crea una nueva contraseña</h1>
                <p className="subtitle">Ingresa una nueva contraseña para tu cuenta</p>
                <form action="/" className="form">

                    <label htmlFor="password" className='label'>Password</label>
                    <input type="password" id='password' placeholder='********'  className='input input-password'/>

                    <label htmlFor="new-password" className='label'>Password</label>
                    <input type="password" id='new-password' placeholder='********'  className='input input-password'/>

                    <input type="submit" value="Confirmar" className='primary-btn login-btn' />

                </form>
            </div>
        </div>
    )
}

export {NewPassword}
