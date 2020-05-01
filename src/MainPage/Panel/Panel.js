import React from "react";
import "./Panel.css";
import ShowMap from "./Map/Map.js";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddRoutePanel from "./AddRoute/AddRoutePanel";
import LoadRoutePanel from "./LoadRoute/LoadRoutePanel";
import CreateRoutePanel from "./CreateRoute/CreateRoutePanel";
import WelcomePanel from "./Welcome/WelcomePanel";
import FriendsPanel from "./Friends/FriendsPanel";
import ProfilePanel from "./Profile/ProfilePanel";
import ShareRoutePanel from "./ShareRoute/ShareRoutePanel";
import SharedRoutesPanel from "./SharedRoutes/SharedRoutesPanel";
import NotificationsPanel from "./Notifications/NotificationsPanel";


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
                    <Route exact path="/viade_es3a/" component={WelcomePanel} />
                    <Route path="/viade_es3a/viade_es3a" component={WelcomePanel} />
                    <Route path="/viade_es3a/addRoute" component={AddRoutePanel} />
                    <Route path="/viade_es3a/createRoute" component={CreateRoutePanel} />
                    <Route path="/viade_es3a/loadRoute" component={LoadRoutePanel} />
                    <Route path="/viade_es3a/shareRoute" component={ShareRoutePanel} />
                    <Route path="/viade_es3a/sharedRoutes" component={SharedRoutesPanel} />
                    <Route path="/viade_es3a/friends" component={FriendsPanel} />
                    <Route path="/viade_es3a/profile" component={ProfilePanel} /> 
                    <Route path="/viade_es3a/notifications" component={NotificationsPanel} /> 
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
            </section>
        </div>
    );
};

export default Panel;