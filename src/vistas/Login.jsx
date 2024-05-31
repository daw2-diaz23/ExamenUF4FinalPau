
import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <Container className="mt-5">
      <div className="pt-5">
        <h1 className="w-100 text-center">Login</h1>
        <form className="form p-4 border shadow bordered mt-5 mx-auto" style={{ width: '400px' }}>
          <div className="mb-3">
            <label htmlFor="formBasicEmail" className="form-label">User: </label>
            <input type="text" className="form-control" id="formBasicEmail" placeholder="usuario@mail.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="formBasicPassword" className="form-label">Contraseña: </label>
            <input type="password" className="form-control" id="formBasicPassword" />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-4">
            Entrar
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
