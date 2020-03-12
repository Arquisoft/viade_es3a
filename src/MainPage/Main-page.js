import React from 'react';
import { useWebId, LoggedIn, LoggedOut } from '@solid/react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar/NavBar';
 import Panel from './Panel/Panel';

const MainPage = () => {
      
  const webId = useWebId();
  return (
    <div>
      <NavBar/>
      <Panel/>
    </div>
    
  );
};

export default MainPage;