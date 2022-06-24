import React, { useRef } from "react";
import "@styles/Login.scss";
import logoLogin from "@logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(data);
  };

  return (
    <div className="login">
      <div className="form-container">
        <img src={logoLogin} alt="logo" class="logo" />
        <h1 className="title">Crea una nueva contraseña</h1>
        <p className="subtitle">Escribe una nueva contraseña para tu cuenta</p>

        <form action="/" className="form" ref={form}>
          <div>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="correo@example.com"
              className="input input-email"
            />

            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="input input-password"
            />

            <button
              onClick={ handleSubmit }
              className="primary-btn login-btn"
            >
              Log in
            </button>
          </div>
          <a href="/">Forgot your password?</a>
        </form>

        <button className="secondary-btn signup-btn" >
          Sign up
        </button>
      </div>
    </div>
  );
};

export { Login };
