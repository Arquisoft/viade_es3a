import React from "react";
import { useWebId, LoggedIn, LoggedOut } from "@solid/react";
import styled from "styled-components";
import SolidImg from "./logo.svg";
import {
    ProviderLogin,
    ProfileViewer,
    LogoutButton
} from "@inrupt/solid-react-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const DemoWrapper = styled.div`
  box-shadow: 0px 20px 25px 0.5px rgba(0, 0, 0, 0.5);
  background-color: #18EEE9;
  border-radius: 18px;
  padding: 2rem 3rem;
  margin-top: 5rem;
  width: 100%;
  max-width: 40rem;
`;

const HeaderWrapper = styled.section`
  text-align: center;
  width: 100%;
`;

const Headline = styled.h1`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 38px;
`;

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
                            direction: "down",
                            viewMoreText: "See Profile",
                            onError: error => {
                                // eslint-disable-next-line no-console
                                console.log("ERROR", error.statusText);
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
                <LoggedIn>
                    <LogoutButton />
                </LoggedIn>
            </DemoWrapper>
        </AppWrapper>
    );
};


export default App;
//<AuthButton popup='https://solid.github.io/solid-auth-client/dist/popup.html' login="Login here!" logout="Log me out"/> Por si fuese necesario