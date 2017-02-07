import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

export default (props) => {


  const logout = (e) => {
    e.preventDefault();
    props.logout();
  };
  const style = {
    margin: 12,
  };
  const iconStyles = {
  marginRight: 24,
};
const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);
  const links = (
    (props.authenticated) ?
      <div>
        <div className="nav navbar-nav float-xs-right">
          <Link to="/" className="nav-item nav-link">
              <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />
          </Link>
          <Link to="#" onClick={logout} className="nav-item nav-link"><RaisedButton label="Salir" style={style} /></Link>
        </div>
      </div>
    :
      <div>
        <div className="nav navbar-nav float-xs-right">
          <Link to="/" className="nav-item nav-link">
              <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />
          </Link>
          <Link to="/signin" className="nav-item nav-link" label="Ingresar"><RaisedButton label="Ingresar" style={style} /></Link>
          <Link to="/signup" className="nav-item nav-link"><RaisedButton label="Registrarse" style={style} /></Link>
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
