import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
    return (
        <div className='my-account'>
            <div className="my-account-container">
                <h1 className="title">Mi cuenta</h1>
                <form action="/" className="form">

                    <label htmlFor="name" className="label">Nombre</label>
                    <p className="value">Nombre X</p>
                    
                    <label htmlFor="emal" className="label">Email</label>
                    <p className="value">correo@example.com</p>

                    <label htmlFor="password" className="label">Password</label>
                    <p className="value">********</p>

                    <input type="submit" value="Editar" className='secondary-btn login-btn' />

                </form>
            </div>
        </div>
    )
}

export {MyAccount}
