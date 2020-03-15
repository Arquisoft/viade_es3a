import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {
  LogoutButton
} from '@inrupt/solid-react-components';

const NavBar = () => {

  // const webId = useWebId();
  return (
    <header className="navBar">
      <nav className="navbar navbar-dark bg-dark" display="flex" position="fixed">
        <div className="navBarLogo">
          <Link to="/">
            <img src={require('../../img/logo_viade_es3a.jpg')} alt="React logo" width="160" />
          </Link>
        </div>
        <div className="navBarOptions">
          <div>
            <Link to="/addRoute" > Add route </Link>
            <Link to="/loadRoute" > Load route </Link>
            <Link to="/profile" > Profile </Link>
            <Link to="/friends" > Friends </Link>
          </div>
        </div>
        <div className="navBarLogout">
          <LogoutButton />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;