
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      <div className="pt-5 w-100 text-center">
        <h1>Registro</h1>
      </div>
      <form className="form p-4 border shadow mt-5" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="mb-3">
          <label htmlFor="formBasicUsername" className="form-label">Nombre de usuario:</label>
          <input type="text" className="form-control" id="formBasicUsername" placeholder="Introduce tu nombre de usuario" />
        </div>

        <div className="mb-3">
          <label htmlFor="formBasicEmail" className="form-label">Email:</label>
          <input type="email" className="form-control" id="formBasicEmail" placeholder="Introduce tu email" />
        </div>

        <div className="mb-3">
          <label htmlFor="formBasicPassword" className="form-label">Contraseña:</label>
          <input type="password" className="form-control" id="formBasicPassword" placeholder="Introduce tu contraseña" />
        </div>

        <div className="mb-3">
          <label htmlFor="formBasicConfirmPassword" className="form-label">Confirmar Contraseña:</label>
          <input type="password" className="form-control" id="formBasicConfirmPassword" placeholder="Confirma tu contraseña" />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-4">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
