import React from 'react';
import '@styles/CreateAccount.scss'

const CreateAccount = () => {
    return (
      <div className="create-account">
        <div className="create-account-container">
          <h1 className="title">Mi cuenta</h1>
          <form action="" className="form" ref={form}>
            <label htmlFor="name" className="label">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              className="input input-name"
            />

            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              className="input"
              id="password"
              placeholder="********"
            ></input>

            <label htmlFor="new-password" className="label"></label>
            <input
              type="password"
              className="input input-password"
              id="new-password"
              placeholder="********"
            ></input>

            <input
              type="submit"
              value="Confirmar"
              className="primary-btn login-btn"
            />
          </form>
        </div>
      </div>
    );
}

export {CreateAccount}
