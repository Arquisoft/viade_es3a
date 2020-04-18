import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogoutButton } from "@inrupt/solid-react-components";

// Iconos
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import ShareIcon from "@material-ui/icons/Share";
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';


const NavBar = () => {
  //git check const webId = useWebId();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navBar">
      <Navbar.Brand as={Link} to="/viade_es3a" className="logo" data-testid="logo">
        <img src={require('../../img/logo_viade_es3a.jpg')} alt="React logo" width="122" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem href="/viade_es3a/addRoute" className="opcionYLogo">
            <BackupOutlinedIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/addRoute" className="optionL" data-testid="add">Add Route</Nav.Link>
          </NavItem>

          <MapOutlinedIcon className="icon"/>
          <NavDropdown title="Routes" className="optionL">
          <div className="dropdown">
            <NavDropdown.Item href="/viade_es3a/loadRoute" className="dropdown">
              <RoomOutlinedIcon className="icon"/>
              <Nav.Link as={Link} to="/viade_es3a/loadRoute" className="optionL" data-testid="load">My routes</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="/viade_es3a/createRoute" className="dropdown">
              <CreateOutlinedIcon className="icon" />
              <Nav.Link as={Link} to="/viade_es3a/createRoute" className="optionL" data-testid="share">Create route</Nav.Link>
            </NavDropdown.Item>
            </div>
          </NavDropdown>
          

          <NavItem href="/viade_es3a/shareRoute" className="opcionYLogo">
            <ShareIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/shareRoute" className="optionL" data-testid="share">Share routes</Nav.Link>
          </NavItem>

          <NavItem href="/viade_es3a/SharedRoutes" className="opcionYLogo">
            <PeopleAltOutlinedIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/SharedRoutes" className="optionL" data-testid="friendsRoutes">Friend's Routes</Nav.Link>
          </NavItem>
          <NavItem href="/viade_es3a/profile" className="opcionYLogo">
            <AccountCircleOutlinedIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/profile" className="optionL" data-testid="profile">Profile</Nav.Link>
          </NavItem>
          <NavItem href="/viade_es3a/friends" className="opcionYLogo">
            <PeopleAltOutlinedIcon className="icon" />
            <Nav.Link as={Link} to="/viade_es3a/friends" className="optionL" data-testid="friends">Friends</Nav.Link>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href="/viade_es3a/logout" className="opcionYLogo">
            <ExitToAppOutlinedIcon className="icon" />
            <LogoutButton data-testid="logout" className="logout" data-testid="logout" />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;