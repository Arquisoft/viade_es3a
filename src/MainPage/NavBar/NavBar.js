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
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import ShareIcon from "@material-ui/icons/Share";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";


const NavBar = () => {
  //git check const webId = useWebId();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navBar">
      <Navbar.Brand as={Link} to="/viade_es3a" className="logo" data-testid="logo">
        <img src={require("../../img/logo_viade_es3a.jpg")} alt="React logo" width="122" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <div className="opcionYLogo">
            <BackupOutlinedIcon className="icon" data-testid="iconRoutes" />
            <NavDropdown title="Upload route" className="dropdown" id="dropdownItemL" data-testid="dropdownItemRoutes">
              <NavDropdown.Item href="#/addRoute" className="opcionYLogo">
                <MapOutlinedIcon className="icon" data-testid="iconAddRoute" />
                <Nav.Link as={Link} to="/addRoute" className="optionL" data-testid="add">Add Route</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#/createRoute" className="opcionYLogo">
                <CreateOutlinedIcon className="icon" data-testid="iconCreateRoute" />
                <Nav.Link as={Link} to="/createRoute" className="optionL" data-testid="share">Create a route</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <NavItem href="/loadRoute" className="opcionYLogo">
            <RoomOutlinedIcon className="icon" data-testid="iconMyRoutes" />
            <Nav.Link as={Link} to="/loadRoute" className="optionL" data-testid="load">My routes</Nav.Link>
          </NavItem>

          <div className="opcionYLogo">
            <ShareIcon className="icon" data-testid="iconFriends" />
            <NavDropdown title="Share" className="dropdown" id="dropdownItemL" data-testid="dropdownItemFriends">
              <NavDropdown.Item href="#/shareRoute" className="opcionYLogo">
                <ShareIcon className="icon" data-testid="iconShareRoutes" />
                <Nav.Link as={Link} to="/shareRoute" className="optionL" data-testid="share">Share routes</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#/SharedRoutes" className="opcionYLogo">
                <PeopleAltOutlinedIcon className="icon" data-testid="iconFriendsRoutes" />
                <Nav.Link as={Link} to="/SharedRoutes" className="optionL" data-testid="friendsRoutes">Friend's Routes</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <NavItem href="/friends" className="opcionYLogo">
            <PeopleAltOutlinedIcon className="icon" data-testid="iconMyFriends" />
            <Nav.Link as={Link} to="/friends" className="optionL" data-testid="friends">My friends</Nav.Link>
          </NavItem>

          <NavItem href="/profile" className="opcionYLogo">
            <AccountCircleOutlinedIcon className="icon" data-testid="iconProfile" />
            <Nav.Link as={Link} to="/profile" className="optionL" data-testid="profile">Profile</Nav.Link>
          </NavItem>
        </Nav>

        <Nav pullRight>

          <NavItem href="/notifications" className="opcionYLogo">
            <Link to="/notifications"><NotificationsActiveOutlinedIcon className="icon" data-testid="notifications" /></Link>
          </NavItem>
          <NavItem href="/logout" className="opcionYLogo">
            <ExitToAppOutlinedIcon className="icon" data-testid="iconLogout" />
            <LogoutButton data-testid="logout" className="logout" data-testid="logout" />
          </NavItem>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
