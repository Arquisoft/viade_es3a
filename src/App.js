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
  height:100rem;
  background-color:black;

`;


const DemoWrapper = styled.div`
  box-shadow: 0px 14px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 2rem 3rem;
  margin-top: 4rem;
  width: 100%;
  max-width: 36rem;
`;

const HeaderWrapper = styled.section`
  text-align: center;
  width: 100%;
`;


const Headline = styled.h1`
  color: #61DAFB;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 38px;
`;

;

const Header = () => {
    return (
        <HeaderWrapper>
            <img src={SolidImg} alt="React logo" width="100" />
            <Headline>VIADE ES3A</Headline>
        </HeaderWrapper>
    );
};

const App = () => {

    const webId = useWebId();
    return (

        <AppWrapper>
            <DemoWrapper>
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
                        <button>Hover over me!</button>
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