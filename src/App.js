import React from 'react';
import { useWebId, LoggedIn, LoggedOut } from '@solid/react';
import styled from 'styled-components';
import SolidImg from './logo.svg';
import {
    ProviderLogin,
    ProfileViewer,
    LogoutButton
} from '@inrupt/solid-react-components';



const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width:100%;
  height:58.55rem;
  background-color:#18EEE9;
`;

const DemoWrapper = styled.div`
  box-shadow: 0px 25px 25px 0.5px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  padding: 3rem 6rem;
  margin-top: 10rem;
  width: 100%;
  max-width: 36rem;
  background-color: #667B77;
  box-sizing: content-box;
`;

const HeaderWrapper = styled.section`
  text-align: center;
  width: 100%;

`;

const ButStyle = styled.button`
  background-color:#18EEE9;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0px 0px 10px 0.5px rgb(253, 252, 252);
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
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

    const webId = useWebId();
    return (

        <AppWrapper>
            <DemoWrapper>
                <Init/>
                <Header />
                {webId && (
                    <ProfileViewer
                        {...{
                            webId,
                            direction: 'down',
                            viewMoreText: 'See Profile',
                            onError: error => {
                                // eslint-disable-next-line no-console
                                console.log('ERROR', error.statusText);
                            },
                            onClick: true
                        }}
                    >
                        <ButStyle>Options</ButStyle>
                    </ProfileViewer>
                )}

                <br />
                <LoggedOut>
                    <ProviderLogin callbackUri={`${window.location.origin}/`} />
                </LoggedOut>
                <LoggedIn><LogoutButton /></LoggedIn>
            </DemoWrapper>
        </AppWrapper>
    );
};

export default App;
//<AuthButton popup='https://solid.github.io/solid-auth-client/dist/popup.html' login="Login here!" logout="Log me out"/> Por si fuese necesario