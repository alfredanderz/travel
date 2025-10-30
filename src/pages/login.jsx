import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inicio de sesión exitoso 🌍");
  };

  const handleBack = () => {
    navigate("/"); // Regresa a Inicio.jsx
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif;
          overflow: hidden;
        }

        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100vw;
          background: url("/fondo.png") no-repeat center center;
          background-size: cover;
          background-attachment: fixed;
          backdrop-filter: blur(2px);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .login-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 70px 80px;
          width: 480px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
          text-align: center;
          animation: fadeIn 1s ease-in-out;
          backdrop-filter: blur(6px);
        }

        .login-header h1 {
          font-size: 2em;
          color: #0077b6;
          margin-bottom: 5px;
        }

        .login-subtitle {
          color: #555;
          margin-bottom: 30px;
          font-size: 1em;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        label {
          font-weight: 500;
          text-align: left;
          color: #333;
          font-size: 0.9em;
        }

        input {
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid #ccc;
          outline: none;
          width: 100%;
          box-sizing: border-box;
          transition: 0.3s;
          font-size: 0.95em;
        }

        input:focus {
          border-color: #0096c7;
          box-shadow: 0 0 6px #00b4d8;
        }

        .password-container {
          position: relative;
          width: 100%;
        }

        .password-container .toggle {
          position: absolute;
          right: 12px;
          top: 10px;
          cursor: pointer;
          font-size: 1.2em;
          color: #555;
        }

        .btn-login {
          background: linear-gradient(90deg, #0096c7, #00b4d8);
          color: white;
          border: none;
          padding: 12px 0;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1em;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-login:hover {
          transform: scale(1.04);
          box-shadow: 0 4px 12px rgba(0, 180, 216, 0.4);
        }

        .divider {
          margin: 25px 0 15px;
          color: #777;
          font-size: 0.9em;
        }

        .btn-google {
          background: white;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 10px 0;
          width: 100%;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s, transform 0.2s;
        }

        .btn-google:hover {
          background: #f2f2f2;
          transform: scale(1.03);
        }

        .signup-text {
          margin-top: 20px;
          color: #555;
          font-size: 0.9em;
        }

        .signup-text a {
          color: #0077b6;
          text-decoration: none;
          font-weight: 600;
        }

        .signup-text a:hover {
          text-decoration: underline;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 📱 Responsivo */
        @media (max-width: 480px) {
          .login-card {
            width: 90%;
            padding: 40px 30px;
          }

          .login-header h1 {
            font-size: 1.6em;
          }
        }
      `}</style>

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>TravelPass</h1>
          </div>
          <p className="login-subtitle">
            Explora el mundo con solo iniciar sesión
          </p>

          <form onSubmit={handleSubmit}>
            <label>Correo electrónico</label>
            <input type="email" placeholder="tuviaje@correo.com" required />

            <label>Contraseña</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
              />
              <span
                className="toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit" className="btn-login">
              Iniciar sesión
            </button>
          </form>

          <div className="divider"></div>
          <button className="btn-google" onClick={handleBack}>
            Regresar
          </button>

          <p className="signup-text">
            ¿No tienes cuenta? <a href="/signup">Regístrate</a>
          </p>
        </div>
      </div>
    </>
  );
}
