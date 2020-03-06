import React from 'react';
import { useWebId, LoggedIn, LoggedOut } from '@solid/react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import SolidImg from './logo.svg';
import {
  ProviderLogin,
  ProfileViewer,
  LogoutButton
} from '@inrupt/solid-react-components';



/* Crear boton */
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`

const Main_page = () => {
      
  const webId = useWebId();
  return (
    
    <Router>
      <div className={"main-page"}>
        <nav>
          <ul>
            <li>
            <img src={SolidImg} alt="React logo" width="62" />
            <Headline>VIADE ES3A</Headline>
            </li>
            <li>
              <Link to="/addRoute">Add route</Link>
            </li>
            <li>
              <Link to="/loadRoute/">Load Route</Link>
            </li>
            <li>
              <Link to="/profile/">Profile</Link>
            </li>
            <li>
              <Link to="/friends/">Friends</Link>
            </li>
          </ul>
          <ul>
            <li>
                <Button as={Link} href="/docs">
                Documentation
                </Button>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Login} />
        <Route path="/addRoute" exact component={Add-Route} />
        <Route path="/loadRoute/" component={loadRoute} />
        <Route path="/profile/" component={Profile} />
        <Route path="/friends/" component={Friends} />
      </div>
    </Router>

  );
};

export default App;