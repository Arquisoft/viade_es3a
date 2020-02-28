import React from 'react';
import { useWebId,AuthButton } from '@solid/react';
import styled from 'styled-components';
import SolidImg from './logo.svg';
import {
  ProviderLogin,
  ProfileViewer
} from '@inrupt/solid-react-components';

const HeaderWrapper = styled.section`
  margin-top: 60px;
  text-align: center;
  width: 100%;
`;

const DemoWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Headline = styled.h1`
  color: #333;
  font-size: 36px;
  font-weight: 300;
`;

;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={SolidImg} alt="React logo" width="62" />
      <Headline>Solid React Components</Headline>
    </HeaderWrapper>
  );
};

const App = () => {

  const webId = useWebId();
  return (
    
    <DemoWrapper>
      <Header />
      <AuthButton popup='https://solid.github.io/solid-auth-client/dist/popup.html' login="Login here!" logout="Log me out"/>
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
            onClick: false
          }}
        >
          <span>Hover over me!</span>
        </ProfileViewer>
      )}

      <br />
      <ProviderLogin callbackUri={`${window.location.origin}/`} />
    </DemoWrapper>
  );
};

export default App;