import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  const logout = (e) => {
    e.preventDefault();
    props.logout();
  };

  const links = (
    (props.authenticated) ?
      <div>
        <div className="nav navbar-nav">
          <Link to="/" className="nav-item nav-link">Inicio</Link>
        </div>
        <div className="nav navbar-nav float-xs-right">
          <Link to="#" onClick={logout} className="nav-item nav-link">Salir</Link>
        </div>
      </div>
    :
      <div>
        <div className="nav navbar-nav">
          <Link to="/" className="nav-item nav-link">Inicio</Link>
        </div>
        <div className="nav navbar-nav float-xs-right">
          <Link to="/signin" className="nav-item nav-link">Ingresar</Link>
          <Link to="/signup" className="nav-item nav-link">Registrarse</Link>
        </div>
      </div>
    );

  return (
    <nav className="navbar navbar-light bg-faded mb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">{links}</div>
        </div>
      </div>
    </nav>
  );
};
