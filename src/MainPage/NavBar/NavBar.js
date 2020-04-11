import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, Grid, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { LogoutButton } from '@inrupt/solid-react-components';

// Iconos
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ShareIcon from '@material-ui/icons/Share';


const NavBar = () => {
  // const webId = useWebId();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navBar">
      <Navbar.Brand as={Link} to="/viade_es3a" className="logo">
        <img src={require('../../img/logo_viade_es3a.jpg')} alt="React logo" width="122" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem href="/viade_es3a/addRoute" className="opcionYLogo">
            <BackupOutlinedIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/addRoute" className="option">Add Route</Nav.Link>
          </NavItem>
          <NavItem href="/viade_es3a/loadRoute" bg="light" className="opcionYLogo">
            <RoomOutlinedIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/loadRoute" className="option">My routes</Nav.Link>
          </NavItem>
          <NavItem href="/viade_es3a/shareRoute" className="opcionYLogo">
            <ShareIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/shareRoute" className="option">Share routes</Nav.Link>
          </NavItem>
          <NavItem href="/viade_es3a/SharedRoutes" className="opcionYLogo">
            <PeopleAltOutlinedIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/SharedRoutes" className="option">Friend's Routes</Nav.Link>
          </NavItem>
          <NavItem href="/viade_es3a/profile" className="opcionYLogo">
            <AccountCircleOutlinedIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/profile" className="option">Profile</Nav.Link>
          </NavItem>
          <NavItem href="/viade_es3a/friends" className="opcionYLogo">
            <PeopleAltOutlinedIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/friends" className="option">Friends</Nav.Link>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href="/viade_es3a/logout">
          <ExitToAppOutlinedIcon className="icon" />
            <LogoutButton data-testid="logout" className="logout" />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;