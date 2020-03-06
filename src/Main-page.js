import React from 'react';
import { useWebId, LoggedIn, LoggedOut } from '@solid/react';
import styled from 'styled-components';
import SolidImg from './logo.svg';
import {
  ProviderLogin,
  ProfileViewer,
  LogoutButton
} from '@inrupt/solid-react-components';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const MainPage = () => {
      
  const webId = useWebId();
  return (
    
    <Router>
      <div className={"main-page"}>
        <nav>
          <ul>
            <li>
            <img src={SolidImg} alt="React logo" width="62" />
            {/* <Headline>VIADE ES3A</Headline> */}
            </li>
            
            <h1>Prueba</h1>
            {/* <li>
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
            </li> */}
            
          </ul>
          {/* <ul>
            <li>
                <Button as={Link} href="/docs">
                Documentation
                </Button>
            </li>
          </ul> */}
        </nav>
        {/* <Route path="/" exact component={Login} />
        <Route path="/addRoute" exact component={Add-Route} />
        <Route path="/loadRoute/" component={loadRoute} />
        <Route path="/profile/" component={Profile} />
        <Route path="/friends/" component={Friends} /> */}
      </div>
    </Router>

  );
};

export default MainPage;