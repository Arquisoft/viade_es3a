import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  LogoutButton
} from "@inrupt/solid-react-components";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import ShareIcon from "@material-ui/icons/Share";

const NavBar = () => {
  // const webId = useWebId();
  return (
    
    <header className="navBar">
      <nav className="navbar navbar-dark bg-dark" display="flex" position="fixed">
        <div className="navBarLogo">
         
          <Link to="/viade_es3a" data-testid="logo">
            <img src={require("../../img/logo_viade_es3a.jpg")} alt="React logo" width="160" />
          </Link>
          
        </div>

        
        <ul className="navBarOptions">
          <li className="option">
            <BackupOutlinedIcon className="icon" />
            <Link to="/viade_es3a/addRoute" data-testid="add"> Add route </Link>
          </li>
          <li className="option">
            <RoomOutlinedIcon className="icon" />
            <Link to="/viade_es3a/loadRoute" data-testid="load" >My routes</Link>
          </li>
          <li className="option">
            <ShareIcon className="icon" />
            <Link to="/viade_es3a/shareRoute" data-testid="share">Share routes</Link>
          </li>
          <li className="option">
            <PeopleAltOutlinedIcon className="icon" />
            <Link to="/viade_es3a/SharedRoutes" data-testid="friendsRoutes"> Friend's Routes </Link>
          </li>
          <li className="option">
            <AccountCircleOutlinedIcon className="icon" />
            <Link to="/viade_es3a/profile" data-testid="profile"> Profile </Link>
          </li>
          <li className="option">
            <PeopleAltOutlinedIcon className="icon" />
            <Link to="/viade_es3a/friends" data-testid="friends"> Friends </Link>
          </li>

        </ul>
        <div className="navBarLogout">
         
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <LogoutButton data-testid="logout"/>
          </li>
          
        </div>
      </nav>
    </header>
    
  );
};

export default NavBar;