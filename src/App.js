import React from 'react';
import { useWebId, LoggedIn, LoggedOut } from '@solid/react';
import styled from 'styled-components';
import SolidImg from './logo.svg';
import {
    ProviderLogin,
    ProfileViewer,
    LogoutButton
} from '@inrupt/solid-react-components';

const HeaderWrapper = styled.section `
  margin-top: 60px;
  text-align: center;
  width: 100%;
`;

const DemoWrapper = styled.div `
  max-width: 900px;
  margin: 0 auto;
`;

const Headline = styled.h1 `
  color: #333;
  font-size: 36px;
  font-weight: 300;
`;

;

const Header = () => {
    return ( <
        HeaderWrapper >
        <
        img src = { SolidImg }
        alt = "React logo"
        width = "62" / >
        <
        Headline > VIADE ES3A < /Headline> <
        /HeaderWrapper>
    );
};

const App = () => {

    const webId = useWebId();
    return (

        <
        DemoWrapper >
        <
        Header / > {
            webId && ( <
                ProfileViewer {... {
                        webId,
                        direction: 'down',
                        viewMoreText: 'See Profile',
                        onError: error => {
                            // eslint-disable-next-line no-console
                            console.log('ERROR', error.statusText);
                        },
                        onClick: true
                    }
                } >
                <
                button > Hover over me! < /button> <
                /ProfileViewer>
            )
        }

        <
        br / >
        <
        LoggedOut > < ProviderLogin callbackUri = { `${window.location.origin}/` }
        /></LoggedOut >
        <
        LoggedIn > < LogoutButton / > < /LoggedIn> <
        /DemoWrapper>
    );
};


export default App;
//<AuthButton popup='https://solid.github.io/solid-auth-client/dist/popup.html' login="Login here!" logout="Log me out"/> Por si fuese necesario