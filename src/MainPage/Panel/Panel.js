import React from "react";
import "./Panel.css";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
                    <Route path="/" component={WelcomePanel} />
                    <Route path="/addRoute" component={AddRoutePanel} />
                    <Route path="/createRoute" component={CreateRoutePanel} />
                    <Route path="/loadRoute" component={LoadRoutePanel} />
                    <Route path="/shareRoute" component={ShareRoutePanel} />
                    <Route path="/sharedRoutes" component={SharedRoutesPanel} />
                    <Route path="/friends" component={FriendsPanel} />
                    <Route path="/profile" component={ProfilePanel} />
                    <Route path="/notifications" component={NotificationsPanel} />
                </div>
            </Switch>
        </nav>
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
