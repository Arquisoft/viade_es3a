import React from "react";
import ShowMap from "../Map/Map";
import LoadRoute from "./LoadRoute";
import "./LoadRoute.css";

const LeftPanel = () => {
    return (
        <nav className="leftPanel_leftPart" data-testid="loadRoutePart">
            <LoadRoute />
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

const LoadRoutePanel = () => {
    return (
        <div className="leftPanel_leftPart">
            <div className="leftPanel">
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    );
};

export default LoadRoutePanel;