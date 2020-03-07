import React from 'react';
import { useWebId, LoggedIn, LoggedOut } from '@solid/react';
import styled from 'styled-components';
import SolidImg from '../logo.svg';
import {
  ProviderLogin,
  ProfileViewer,
  LogoutButton
} from '@inrupt/solid-react-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './NavBar/NavBar';

const MainPage = () => {
      
  const webId = useWebId();
  return (
    <NavBar></NavBar>
  );
};

export default MainPage;