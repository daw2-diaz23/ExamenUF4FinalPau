
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">Gestión de incidencias FPLLEFIA</a>
        <div>
          <Link to="/panel">
            <button className="btn btn-secondary ms-2">PANEL</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-secondary ms-2">LOGIN</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-secondary ms-2">REGISTRO</button>
          </Link>
        </div>
        <div>
          <span>administrador@fpllefia.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
