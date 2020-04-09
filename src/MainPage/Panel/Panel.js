import React from 'react';
import './Panel.css';
import ShowMap from './Map/Map.js';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddRoute from "./AddRoute/AddRoute";
import LoadRoute from './LoadRoute/LoadRoute';
import Welcome from './Welcome/Welcome';
import Friends from './Friends/Friends';
<<<<<<< HEAD
import Profile from './Profile/Profile.js';
=======
import Profile from './Profile/Profile';
import ShareRoute from './ShareRoute/ShareRoute';
import SharedRoutes from './SharedRoutes/SharedRoutes';
>>>>>>> shareRoute

const AppWrapper = styled.div`
display: flex;
justify-content:center;
margin-top:100px;
`;

const Container = styled.div`
`;

const LeftPanel = () => {
    return (
        <nav className="leftPanel_leftPart">
            <Switch>
                <div>
                    <Route exact path="/viade_es3a/" component={Welcome} />
                    <Route path="/viade_es3a/viade_es3a" component={Welcome} />
                    <Route path="/viade_es3a/addRoute" component={AddRoute} />
                    <Route path="/viade_es3a/loadRoute" component={LoadRoute} />
                    <Route path="/viade_es3a/shareRoute" component={ShareRoute} />
                    <Route path="/viade_es3a/sharedRoutes" component={SharedRoutes} />
                    <Route path="/viade_es3a/friends" component={Friends} />
                    <Route path="/viade_es3a/profile" component={Profile} /> 
                </div>
            </Switch>
        </nav>
    );
};

const RightPanel = () => {
    return (
        <article className="rightPanel_mapa" id="jeje">
            {/* <h1>*Insert route to show map*</h1> */}
           
                    <ShowMap></ShowMap>
            

        </article>
    );
};



const Panel = () => {
    return (
        <div className="panelCompleto">      
            {/* Panel izquierdo */}
            <section className="leftPanel">
                <LeftPanel />
                {/* Panel derecho */}
                <RightPanel />
            </section>
        </div>
    );
};

export default Panel;