import React from "react";
import ShowMap from "../Map/Map";
import Notifications from "./Notifications";
import "./Notifications.css";

const LeftPanel = () => {
    return (
        <nav className="leftPanel_leftPart" data-testid="notificationsRoutePart">
            <Notifications />
        </nav>
    );
};

const RightPanel = () => {
    return (
        <div className="rightPanel_mapa" id="jeje" data-testid="mapPart">
            <ShowMap></ShowMap>
        </div>
    );
};

const NotificationsPanel = () => {
    return (
        <div className="leftPanel_leftPart">
            <div className="leftPanel">
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    );
};

export default NotificationsPanel;