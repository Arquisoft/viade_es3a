import React from 'react';
import { LoggedIn, LoggedOut } from '@solid/react';
import styled from 'styled-components';
import SolidImg from './logo.svg';
import {
    ProviderLogin,
    LogoutButton,

} from '@inrupt/solid-react-components';
import MainPage from './MainPage/Main-page';

import { BrowserRouter as Router } from "react-router-dom";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width:100%;
  height: -webkit-fill-available;
  background-color:#18EEE9;
  box-sizing:content-box;  
`;

const DemoWrapper = styled.div`
  box-shadow: 0px 20px 20px 0.5px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 2rem 4rem;
  margin-top: auto;
  margin-bottom:auto;
  width: 100%;
  max-width: 35rem;
  background-color: #667B77;
`;



const HeaderWrapper = styled.section`
  text-align: center;
  width: 100%;

`;

const Headline = styled.h1`
  color: #18EEE9;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 0.1em 0.1em 0.05em #000000;
  font-weight: bold;
  font-size: 38px;
`;

const Title = styled.h1`
  color: #18EEE9;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 0.1em 0.1em 0.05em #000000;
  font-weight: bold;
  font-size: 38px;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

;

const Header = () => {
    return (
        <HeaderWrapper>
            <img src={SolidImg} alt="React logo" width="120" />
            <Headline>VIADE ES3A</Headline>
        </HeaderWrapper>
    );
};

const Init = () =>{
    return (
        <Title>ROUTE MANAGER</Title>
    );
};

const App = () => {
   
    return (

        <AppWrapper>
            <DemoWrapper>
                <Init/>
                <LoggedOut>
                    <Header />
                    <ProviderLogin callbackUri={`${window.location.origin}/viade_es3a/`} />
                </LoggedOut>
                <LoggedIn>
                    <Router>
                    <MainPage />
                    </Router>
                    <LogoutButton />
                </LoggedIn>
            </DemoWrapper>
        </AppWrapper>
    );
};

export default App;
//<AuthButton popup='https://solid.github.io/solid-auth-client/dist/popup.html' login="Login here!" logout="Log me out"/> Por si fuese necesario
